import type {Course} from '../../types/course'
import "./CourseCard.css"
import { Link } from 'react-router-dom';

interface CourseCardProps {
    course: Course;
}

function CourseCard({course}: CourseCardProps) {
    const {
        id,
        title,
        description,
        image,
        category,
        lessons,
        level,
        instructor,
        price,
        isFavorite
    } = course;
    return(
        <article className="course-card">

            {/* Card Header */}
            <div className="course-card-header">
                <img className="course-image" src={image} alt={title} />
                <span className="course-category">
                    {category}
                </span>
                <span className="course-favorite">
                    {isFavorite ? '♥' : '♡'}
                </span>
            </div>

            {/* Card body */}
            <div className="course-card-body">
                <h3 className="course-title">
                    <Link to={`/courses/${id}`}>{title}</Link>
                    
                </h3>
                <p className="course-description">
                    {description}
                </p>

                {/* Card Info */}
                <div className="course-info">
                    <span>{lessons}</span>
                    <span>{level}</span>
                    <span>{category}</span>
                </div>

                {/* Card Footer */}
                <div className="course-card-footer">
                    <div className="course-instructor">
                        <span className="instructor-avatar">
                            {instructor.charAt(0)}
                        </span>
                        <span>{instructor}</span>
                    </div>
                    <span className="course-price">
                        ${price}
                    </span>
                </div>
            </div>
        </article>
    )
}

export default CourseCard;
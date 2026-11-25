import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import NotFoundPage from './NotFoundPage';

function CourseDetail() {
  const { id } = useParams();

  const course = courses.find(
    (course) => course.id === id
  );

  if (!course) {
    return <NotFoundPage />;
  }

  const {
    title,
    description,
    image,
    category,
    lessons,
    level,
    instructor,
    price
  } = course;

  return (
    <div className="course-detail">

      <Link to="/courses">
        Quay lại danh sách khóa học
      </Link>

      <h1>{title}</h1>

      <img
        src={image}
        alt={title}
        width={400}
      />

      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Lessons: {lessons}</p>
      <p>Level: {level}</p>
      <p>Instructor: {instructor}</p>
      <p>Price: ${price}</p>

    </div>
  );
}

export default CourseDetail;
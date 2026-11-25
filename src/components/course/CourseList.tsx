import CourseCard from "./CourseCard"
import "./CourseList.css"
import type {Course} from "../../types/course"

interface CourseListProps {
    courses: Course[];
}

function CourseList({courses}: CourseListProps) {
    return (
        <div className="course-list">
            {courses.map((course) => 
            <CourseCard key={course.id} course={course} />
            )}
        </div>
    )
}
export default CourseList;
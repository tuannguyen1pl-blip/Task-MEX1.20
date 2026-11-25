import { courses } from '../data/courses';
import './Courses.css';
import CourseList from '../components/course/CourseList'

function Courses() {
  return (
    <div className="courses-page">
      <h1>My Courses</h1>

      <p className="courses-subtitle">
        Manage and continue your enrolled courses.
      </p>

      <CourseList courses={courses} />
    </div>
  );
}

export default Courses;
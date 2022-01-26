import { CourseProps } from "./helper/course-protocols";

export class CreateCourse {
  create({ name, duration, instructor }: CourseProps) {
    console.log(name, duration, instructor);
  }
}

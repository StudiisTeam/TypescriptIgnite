import { Request, Response } from "express";
import { CreateCourse } from "./CreateCourse";

export function createCourse(request: Request, response: Response) {
  const courseData = request.body
  const createCourseService = new CreateCourse()
  createCourseService.create(courseData)

  return response.status(200).json({ message: "Get course" })
}

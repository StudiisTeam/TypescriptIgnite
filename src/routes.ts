import { Request, Response } from "express";
import { CreateCourse } from "./CreateCourse";

export function createCourse(request: Request, response: Response) {
  const createCourseService = new CreateCourse()
  createCourseService.create("nodeJs", 10, "matheus")

  return response.status(200).json({ message: "Get course" })
}

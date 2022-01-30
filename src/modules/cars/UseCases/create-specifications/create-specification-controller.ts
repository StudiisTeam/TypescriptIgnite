import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./create-specification-use-cases";

export class CreateSpecificationController {

  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }
  handle(request: Request, response: Response) {
    const { name, description } = request.body
    this.createSpecificationUseCase.create({ name, description })
    return response.status(201).send()
  }
}

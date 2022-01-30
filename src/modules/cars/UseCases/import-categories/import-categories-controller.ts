import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./import-categories-usecase";

export class ImportCategoriesController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) { }
  handle(request: Request, response: Response): Response {
    const { file } = request
    this.importCategoryUseCase.execute(file)
    return response.status(200).send()
  }
}

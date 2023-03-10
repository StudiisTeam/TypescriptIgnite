import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./import-categories-usecase";

export class ImportCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase)
        await importCategoryUseCase.execute(file)
        return response.status(200).send()
    }
}

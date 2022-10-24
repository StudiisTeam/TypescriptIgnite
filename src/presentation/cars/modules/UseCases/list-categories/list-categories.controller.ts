import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCategoriesUseCase } from './list-categories-usecase'

export class ListCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCategoryUseCase = container.resolve(ListCategoriesUseCase)
        const allCategories = await listCategoryUseCase.execute()
        return response.status(200).json(allCategories)
    }
}

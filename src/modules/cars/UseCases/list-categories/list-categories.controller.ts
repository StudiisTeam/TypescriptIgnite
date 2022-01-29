import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './list-categories-usecase'

export class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) { }
  handle(request: Request, response: Response): Response {
    const allCategories = this.listCategoryUseCase.execute()
    return response.status(200).json(allCategories)
  }
}

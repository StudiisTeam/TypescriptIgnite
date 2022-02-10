import { Request, Response } from 'express'
import { CreateCategoryUseCase } from './create-category-usecase'

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body
    await this.createCategoryUseCase.create({ name, description })
    return response.status(201).send()
  }

}

import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCategoryUseCase } from './create-category-usecase'

export class CreateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase)
        await createCategoryUseCase.create({ name, description })
        return response.status(201).send()
    }
}

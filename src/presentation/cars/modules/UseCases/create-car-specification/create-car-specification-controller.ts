import { container } from "tsyringe";
import { CreateCarSpecificationUseCase } from "./create-car-specification-usecase";
import { Request, Response } from 'express'

export class CreateCarSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { car_id } = request.params
        const { specification_id } = request.body
        const createCarSpecificationUseCase = container.resolve(CreateCarSpecificationUseCase)
        const cars = await createCarSpecificationUseCase.execute({ car_id, specification_id })

        return response.json(cars)
    }
}

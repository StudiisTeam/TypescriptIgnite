import { Request, Response } from "express";
import { stringify } from "querystring";
import { container } from "tsyringe";
import { ListCarsUsecase } from "./list-car-usecase";

export class ListCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, name, category_id } = request.query;

    const listCarsUseCase = container.resolve(ListCarsUsecase);

    const cars = await listCarsUseCase.execute({
      brand: brand as string,
      name: name as string,
      category_id: category_id as string,
    });

    return response.json(cars);
  }
}

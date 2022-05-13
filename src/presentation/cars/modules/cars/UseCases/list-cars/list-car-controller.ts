import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCarUseCase } from "./list-cars-usecase";

export class ListCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { brand, name, category_id } = request.params;
    const listCarUseCase = container.resolve(ListCarUseCase);
    const cars = listCarUseCase.list(brand, name, category_id);
    return response.json(cars).status(200);
  }
}

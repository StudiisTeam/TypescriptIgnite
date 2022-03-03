import { Response, Request } from "express";
import { ok } from "presentation/cars/modules/helper/http-helper";
import {
  HttpRequest,
  HttpResponse,
} from "presentation/cars/modules/protocols/http-protocols";
import { container } from "tsyringe";
import { CreateCarUseCase } from "./create-car-use-case";

export class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      daily_rate,
      available,
      license_plate,
      fine_amount,
      brand,
      category_id,
    } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);
    console.log(request.body);
    const car = await createCarUseCase.add({
      name,
      description,
      daily_rate,
      available,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    return response.status(200).json(car);
  }
}

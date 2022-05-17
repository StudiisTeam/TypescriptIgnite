import { AppError } from "presentation/errors/app-erros";
import { CarRepository } from "../../repositories/implemetations/car-repository";

interface IRequest {
  car_id: string;
  specification_id: string[];
}

export class CreateCarSpecification {
  constructor(private carsRepository: CarRepository) {}

  async execute({ car_id, specification_id }: IRequest): Promise<void> {
    const carExist = await this.carsRepository.findById(car_id);

    if (carExist) {
      throw new AppError("car doesn't exist");
    }
  }
}

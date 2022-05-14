import { inject, injectable } from "tsyringe";
import { Cars } from "../../entities/cars";
import { ICarRepository } from "../../repositories/car-repository-protocols";

interface IRequest {
  category_id: string;
  brand: string;
  name: string;
}

@injectable()
export class ListCarsUsecase {
  constructor(
    @inject("CarRepository") private carsRepository: ICarRepository
  ) {}
  async execute({ brand, category_id, name }: IRequest): Promise<Cars[]> {
    const cars = await this.carsRepository.findAvailableCars(
      brand,
      name,
      category_id
    );
    return cars;
  }
}

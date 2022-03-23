import { Cars } from "../../entities/cars";
import { ICarRepository } from "../../repositories/car-repository-protocols";

interface IRequest {
  name?: string;
  brand?: string;
  category_id?: string;
}
export class ListCarUseCase {
  constructor(private carRepository: ICarRepository) {}
  async list({ brand, name, category_id }: IRequest): Promise<Cars[]> {
    const cars = await this.carRepository.findAllAvailableCars({
      brand,
      name,
      category_id,
    });
    return cars;
  }
}

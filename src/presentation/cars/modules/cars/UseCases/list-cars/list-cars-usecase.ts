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
    const cars = await this.carRepository.findAllAvailableCars();
    if (brand) {
      const car = this.carRepository.findAvailableCarsByBrand(brand);
      return car;
    }
    if (name) {
      const car = this.carRepository.findAvailableCarsByName(name);
      return car;
    }
    if (category_id) {
      const car = this.carRepository.findAvailableCarsByCategory(category_id);
      return car;
    }
    return cars;
  }
}

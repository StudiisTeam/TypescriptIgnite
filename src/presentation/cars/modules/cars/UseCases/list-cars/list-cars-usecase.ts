import { Cars } from "../../entities/cars";
import { ICarRepository } from "../../repositories/car-repository-protocols";

export class ListCarUseCase {
  constructor(private carRepository: ICarRepository) {}
  async list(): Promise<Cars[]> {
    const cars = await this.carRepository.findAllAvailableCars();
    return cars;
  }
}

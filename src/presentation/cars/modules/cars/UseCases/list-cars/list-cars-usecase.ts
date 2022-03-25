import { inject, injectable } from "tsyringe";
import { Cars } from "../../entities/cars";
import { ICarRepository } from "../../repositories/car-repository-protocols";

@injectable()
export class ListCarUseCase {
  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository
  ) {}
  async list(
    brand?: string,
    name?: string,
    category_id?: string
  ): Promise<Cars[]> {
    const cars = await this.carRepository.findAllAvailableCars(
      brand,
      name,
      category_id
    );
    return cars;
  }
}

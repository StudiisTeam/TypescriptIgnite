import { inject, injectable } from "tsyringe";
import { ICreateCar } from "../../dtos/create-car";
import { ICarRepository } from "../../repositories/car-repository-protocols";

//@injectable()
export class CreateCarUseCase {
  constructor(
    //@inject("CarRepository")
    private carsRepository: ICarRepository
  ) {
  }
  async add(carData: ICreateCar): Promise<void> {
    this.carsRepository.add(carData)
  }
}

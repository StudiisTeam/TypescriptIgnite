import { AppError } from "../../../../../../presentation/errors/app-erros";
import { inject, injectable } from "tsyringe";
import { ICreateCar } from "../../dtos/create-car";
import { Cars } from "../../entities/cars";
import { ICarRepository } from "../../repositories/car-repository-protocols";

@injectable()
export class CreateCarUseCase {
  constructor(
    @inject("CarRepository")
    private carsRepository: ICarRepository
  ) {}

  async add(carData: ICreateCar): Promise<Cars> {
    const carExists = await this.carsRepository.findCarByLicensePlate(
      carData.license_plate
    );
    if (carExists) {
      throw new AppError("Car Alread Exists");
    }
    const car = await this.carsRepository.add(carData);
    return car;
  }
}

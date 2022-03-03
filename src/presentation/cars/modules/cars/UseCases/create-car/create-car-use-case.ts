import { AppError } from "../../../../../../errors/app-erros";
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

  async add({
    name,
    description,
    daily_rate,
    available,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCar): Promise<Cars> {
    const carExists = await this.carsRepository.findCarByLicensePlate(
      license_plate
    );
    if (carExists) {
      throw new AppError("Car Alread Exists");
    }
    const car = await this.carsRepository.add({
      name,
      description,
      daily_rate,
      available,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });
    return car;
  }
}

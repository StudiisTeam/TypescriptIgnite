import { getRepository, Repository } from "typeorm";
import { ICreateCar } from "../../dtos/create-car";
import { Cars } from "../../entities/cars";
import { ICarRepository } from "../car-repository-protocols";

export class CarRepository implements ICarRepository {
  private repository: Repository<Cars>;
  constructor() {
    this.repository = getRepository(Cars);
  }

  async add(carData: ICreateCar): Promise<Cars> {
    const car = this.repository.create(carData);
    await this.repository.save(car);
    return car;
  }

  async findCarByLicensePlate(license_plate: string): Promise<Cars> {
    return null;
  }
}

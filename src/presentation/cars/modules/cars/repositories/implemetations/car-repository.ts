import { ICreateCar } from "../../dtos/create-car";
import { Car } from "../../entities/cars";
import { ICarRepository } from "../car-repository-protocols";

export class CarRepository implements ICarRepository {
  findCarByLicensePlate(license_plate: string): Promise<Car> {
    throw new Error("Method not implemented.");
  }
  async add(carData: ICreateCar): Promise<Car> {
    throw new Error("Method not implemented.");
  }
}

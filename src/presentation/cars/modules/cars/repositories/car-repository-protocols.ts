import { ICreateCar } from "../dtos/create-car";
import { Car } from "../entities/cars";

export interface ICarRepository {
  add(carData: ICreateCar): Promise<Car>
  findCarByLicensePlate(license_plate: string): Promise<Car>
}

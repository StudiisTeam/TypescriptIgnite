import { ICreateCar } from "../dtos/create-car";
import { Cars } from "../entities/cars";

export interface ICarRepository {
  add(carData: ICreateCar): Promise<Cars>;
  findCarByLicensePlate(license_plate: string): Promise<Cars>;
  findAvailableCars(
    category_id?: string,
    brand?: string,
    name?: string
  ): Promise<Cars[]>;
}

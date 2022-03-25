import { ICreateCar } from "../dtos/create-car";
import { Cars } from "../entities/cars";

export interface ICarRepository {
  add(carData: ICreateCar): Promise<Cars>;
  findCarByLicensePlate(license_plate: string): Promise<Cars>;
  findAllAvailableCars(
    brand?: string,
    name?: string,
    category_id?: string
  ): Promise<Cars[]>;
}

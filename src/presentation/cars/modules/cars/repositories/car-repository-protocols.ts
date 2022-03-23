import { ICreateCar } from "../dtos/create-car";
import { Cars } from "../entities/cars";

export interface ICarRepository {
  add(carData: ICreateCar): Promise<Cars>;
  findCarByLicensePlate(license_plate: string): Promise<Cars>;
  findAllAvailableCars(): Promise<Cars[]>;
  findAvailableCarsByName(name: string): Promise<Cars[]>;
  findAvailableCarsByCategory(category_id: string): Promise<Cars[]>;
  findAvailableCarsByBrand(brand: string): Promise<Cars[]>;
}

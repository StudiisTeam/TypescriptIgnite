import { ICreateCar } from "../dtos/create-car";
import { Cars } from "../entities/cars";

interface IRequest {
  name?: string;
  brand?: string;
  category_id?: string;
}
export interface ICarRepository {
  add(carData: ICreateCar): Promise<Cars>;
  findCarByLicensePlate(license_plate: string): Promise<Cars>;
  findAllAvailableCars({ brand, name, category_id }: IRequest): Promise<Cars[]>;
}

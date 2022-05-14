import { getRepository, Repository } from "typeorm";
import { ICreateCar } from "../../dtos/create-car";
import { Cars } from "../../entities/cars";
import { ICarRepository } from "../car-repository-protocols";

export class CarRepository implements ICarRepository {
  private repository: Repository<Cars>;
  constructor() {
    this.repository = getRepository(Cars);
  }

  async findAvailableCars(
    category_id?: string,
    brand?: string,
    name?: string
  ): Promise<Cars[]> {
    const carsQuery = await this.repository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });

    if (brand) {
      carsQuery.andWhere("brand = :brand", { brand });
    }
    if (name) {
      carsQuery.andWhere("name = :name", { name });
    }
    if (category_id) {
      carsQuery.andWhere("category_id = :category_id", { category_id });
    }
    const cars = await carsQuery.getMany();

    return cars;
  }

  async add(carData: ICreateCar): Promise<Cars> {
    const car = this.repository.create(carData);
    await this.repository.save(car);
    return car;
  }

  async findCarByLicensePlate(license_plate: string): Promise<Cars> {
    const car = await this.repository.findOne({ license_plate });
    return car;
  }
}

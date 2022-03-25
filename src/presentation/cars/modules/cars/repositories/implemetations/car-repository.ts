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
    const car = await this.repository.findOne({ license_plate });
    return car;
  }
  async findAllAvailableCars(
    brand?: string,
    name?: string,
    category_id?: string
  ): Promise<Cars[]> {
    const carQuerys = await this.repository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });

    if (brand) {
      carQuerys.andWhere("brand = :brand", { brand });
    }
    if (name) {
      carQuerys.andWhere("name = :name", { name });
    }
    if (category_id) {
      carQuerys.andWhere("category_id = :category_id", { category_id });
    }
    const cars = carQuerys.getMany();

    return cars;
  }
}

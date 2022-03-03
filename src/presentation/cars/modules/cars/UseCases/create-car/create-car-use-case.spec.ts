import { AppError } from "../../../../../../errors/app-erros";
import { ICreateCar } from "../../dtos/create-car";
import { Cars } from "../../entities/cars";
import { ICarRepository } from "../../repositories/car-repository-protocols";
import { CreateCarUseCase } from "./create-car-use-case";

interface SutTypes {
  sut: CreateCarUseCase;
  carRepositoryStub: ICarRepository;
}

const makeFakeCar = () => ({
  available: true,
  brand: "any_brand",
  category_id: "any_category",
  daily_rate: 100,
  description: "any_description",
  fine_amount: 10,
  id: "valid_id",
  license_plate: "any_license",
  name: "any_name",
});

const makeCarRepository = () => {
  class CarRepositoryStub implements ICarRepository {
    cars: Cars[] = [];
    async add(carData: ICreateCar): Promise<Cars> {
      const car = new Cars();
      Object.assign(car, carData);
      this.cars.push(car);
      return new Promise((resolve, reject) => resolve(makeFakeCar()));
    }
    async findCarByLicensePlate(license_plate: string): Promise<Cars> {
      const car = await this.cars.find(
        (car) => car.license_plate === license_plate
      );
      return car;
    }
  }
  return new CarRepositoryStub();
};

const makeSut = (): SutTypes => {
  const carRepositoryStub = makeCarRepository();
  const sut = new CreateCarUseCase(carRepositoryStub);
  return {
    sut,
    carRepositoryStub,
  };
};

const makeFakeRequest = () => ({
  name: "any_name",
  description: "any_description",
  daily_rate: 100,
  license_plate: "any_license",
  available: true,
  fine_amount: 10,
  brand: "any_brand",
  category_id: "any_category",
});

describe("Create Car", () => {
  test("should be able to create a new car", async () => {
    const { sut } = makeSut();
    const car = await sut.add(makeFakeRequest());
    expect(car).toEqual(makeFakeCar());
  });

  test("should not be able to create a car if exist a licence plate", () => {
    const { sut } = makeSut();
    expect(async () => {
      await sut.add(makeFakeRequest());
      await sut.add(makeFakeRequest());
    }).rejects.toBeInstanceOf(AppError);
  });
});

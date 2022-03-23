import { ICreateCar } from "../../dtos/create-car";
import { Cars } from "../../entities/cars";
import { ICarRepository } from "../../repositories/car-repository-protocols";
import { ListCarUseCase } from "./list-cars-usecase";

describe("List Cars", () => {
  interface SutTypes {
    sut: ListCarUseCase;
    carRepository: ICarRepository;
  }

  const makeFakeCar = () => ({
    available: true,
    brand: "any_brand",
    category_id: "any_category",
    daily_rate: 100,
    description: "any_description",
    fine_amount: 10,
    license_plate: "any_license",
    name: "any_name",
  });

  const makeFakeNotAvailibleCar = () => ({
    available: false,
    brand: "any_brand",
    category_id: "any_category",
    daily_rate: 100,
    description: "any_description",
    fine_amount: 10,
    license_plate: "any_license",
    name: "any_name",
  });

  const makeCarRepository = (): ICarRepository => {
    class CarRepositoryStub implements ICarRepository {
      cars: Cars[] = [];
      async add(carData: ICreateCar): Promise<Cars> {
        this.cars.push(makeFakeCar(), makeFakeNotAvailibleCar());
        return new Promise((resolve, reject) => resolve(makeFakeCar()));
      }
      findCarByLicensePlate(license_plate: string): Promise<Cars> {
        throw new Error("Method not implemented.");
      }
      async findAllAvailableCars(): Promise<Cars[]> {
        const availableCars = this.cars.filter((car) => car.available === true);
        return availableCars;
      }
      async findAvailableCarsByName(name: string): Promise<Cars[]> {
        const carByName = this.cars.filter((car) => car.name === name);
        return carByName;
      }
      async findAvailableCarsByCategory(category_id: string): Promise<Cars[]> {
        const carByCategory = this.cars.filter(
          (car) => car.category_id === category_id
        );
        return carByCategory;
      }
      async findAvailableCarsByBrand(brand: string): Promise<Cars[]> {
        const carByBrand = this.cars.filter((car) => car.brand === brand);
        return carByBrand;
      }
    }
    return new CarRepositoryStub();
  };

  const makeSut = (): SutTypes => {
    const carRepository = makeCarRepository();
    const sut = new ListCarUseCase(carRepository);
    return {
      sut,
      carRepository,
    };
  };
  test("should be listAll available cars", async () => {
    const { sut, carRepository } = makeSut();
    const car = await carRepository.add(makeFakeCar());
    const cars = await sut.list({});
    console.log(cars);

    expect(cars).toEqual([car]);
  });
});

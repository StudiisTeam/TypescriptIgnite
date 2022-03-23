import { ICreateCar } from "../../dtos/create-car";
import { Cars } from "../../entities/cars";
import { ICarRepository } from "../../repositories/car-repository-protocols";
import { ListCarUseCase } from "./list-cars-usecase";

interface SutTypes {
  sut: ListCarUseCase;
  carRepository: ICarRepository;
}
interface IRequest {
  name?: string;
  brand?: string;
  category_id?: string;
}
describe("List Cars", () => {
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
      async findAllAvailableCars({
        brand,
        name,
        category_id,
      }: IRequest): Promise<Cars[]> {
        const availableCars = this.cars.filter((car) => car.available === true);
        if (brand || name || category_id) {
          const cars = availableCars.filter(
            (car) =>
              car.name === name ||
              car.brand === brand ||
              car.category_id === category_id
          );
          return cars;
        }
        return availableCars;
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
    expect(cars).toEqual([car]);
  });

  test("should be listAll available cars by name", async () => {
    const { sut, carRepository } = makeSut();
    const car = await carRepository.add(makeFakeCar());
    const cars = await sut.list({ name: "any_name" });
    expect(cars).toEqual([makeFakeCar()]);
  });

  test("should be listAll available cars by brand", async () => {
    const { sut, carRepository } = makeSut();
    const car = await carRepository.add(makeFakeCar());
    const cars = await sut.list({ brand: "any_brand" });
    expect(cars).toEqual([makeFakeCar()]);
  });
});

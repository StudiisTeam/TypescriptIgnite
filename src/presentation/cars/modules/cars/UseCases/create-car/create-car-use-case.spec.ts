import { ICreateCar } from "../../dtos/create-car";
import { Car } from "../../entities/cars";
import { CarRepository } from "../../repositories/implemetations/car-repository";
import { CreateCarUseCase } from "./create-car-use-case";

interface SutTypes {
  sut: CreateCarUseCase
  carRepository: CarRepository
}

const makeCarRepository = () => {
  class CarRepositoryStub implements CarRepository {
    cars: Car[] = []
    async add(carData: ICreateCar): Promise<Car> {
      const car = new Car()
      Object.assign(car, carData)
      this.cars.push(car)
      return car
    }
  }
  return new CarRepositoryStub()
}

const makeSut = (): SutTypes => {
  const carRepository = makeCarRepository()
  const sut = new CreateCarUseCase(carRepository)
  return {
    sut,
    carRepository
  }
}

describe('Create Car', () => {
  test('should be able to create a new car', async () => {
    const { sut } = makeSut()
    const car = {
      name: 'any_name',
      description: 'any_description',
      daily_rate: 100,
      license_plate: 'any_license',
      available: true,
      fine_amount: 10,
      brand: 'any_brand',
      category_id: 'any_category',
    }
    await sut.add(car)
  });
})

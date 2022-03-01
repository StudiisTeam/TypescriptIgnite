import { AppError } from "../../../../../../errors/app-erros";
import { ICreateCar } from "../../dtos/create-car";
import { Car } from "../../entities/cars";
import { CarRepository } from "../../repositories/implemetations/car-repository";
import { CreateCarUseCase } from "./create-car-use-case";

interface SutTypes {
  sut: CreateCarUseCase
  carRepositoryStub: CarRepository
}

const makeCarRepository = () => {
  class CarRepositoryStub implements CarRepository {
    cars: Car[] = []
    async add(carData: ICreateCar): Promise<Car> {
      const car = new Car()
      Object.assign(car, carData)
      this.cars.push(car)
      return new Promise((resolve, reject) => resolve(car))
    }
    async findCarByLicensePlate(license_plate: string): Promise<Car> {
      const car = await this.cars.find((car) => car.license_plate === license_plate)
      return car
    }
  }
  return new CarRepositoryStub()
}


const makeSut = (): SutTypes => {
  const carRepositoryStub = makeCarRepository()
  const sut = new CreateCarUseCase(carRepositoryStub)
  return {
    sut,
    carRepositoryStub
  }
}

const makeFakeRequest = () => ({
  name: 'any_name',
  description: 'any_description',
  daily_rate: 100,
  license_plate: 'any_license',
  available: true,
  fine_amount: 10,
  brand: 'any_brand',
  category_id: 'any_category',
})

describe('Create Car', () => {
  test('should be able to create a new car', async () => {
    const { sut, carRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(carRepositoryStub, "add")
    await sut.add(makeFakeRequest())
    expect(addSpy).toHaveBeenCalledWith(makeFakeRequest())
  });
  test('should not be able to create a car if exist a licence plate', () => {
    const { sut, carRepositoryStub } = makeSut()
    expect(async () => {
      await sut.add(makeFakeRequest())
      await sut.add(makeFakeRequest())
    }).rejects.toBeInstanceOf(AppError)
  });
})

import { AppError } from "presentation/errors/app-erros";
import { inject, injectable } from "tsyringe";
import { SpecificationRepository } from "../../repositories/implemetations";
import { CarRepository } from "../../repositories/implemetations/car-repository";

interface IRequest {
  car_id: string;
  specification_id: string[];
}

@injectable()
export class CreateCarSpecificationUseCase {
  constructor(
    @inject('CarRepository')
    private carsRepository: CarRepository,
    @inject('SpecificationRepository')
    private specificationRepository: SpecificationRepository
  ) {}

  async execute({ car_id, specification_id }: IRequest): Promise<void> {
    const carExist = await this.carsRepository.findById(car_id);

    if (carExist) {
      throw new AppError("car doesn't exist");
    }

    const specification = await this.specificationRepository.findById(
      specification_id
    );

    carExist.specification = specification;
    await this.carsRepository.add(carExist);
  }
}

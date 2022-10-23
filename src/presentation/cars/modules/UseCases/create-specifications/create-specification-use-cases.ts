import { AppError } from "helper/errors/app-erros";
import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/specification-protocols";

interface IRequest {
  name: string;
  description: string;
}
@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) { }

  async create({ name, description }: IRequest): Promise<void> {
    const specificationsAlreadExist =
      await this.specificationRepository.findByName(name);

    if (specificationsAlreadExist) {
      throw new AppError("Specification Alread exist");
    }

    this.specificationRepository.create({ name, description });
  }
}

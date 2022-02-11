import { inject, injectable } from "tsyringe"
import { ISpecificationRepository } from "../../repositories/specification-protocols"

interface IRequest {
  name: string
  description: string
}
@injectable()
export class CreateSpecificationUseCase {

  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository) { }

  create({ name, description }: IRequest): void {
    const specificationsAlreadExist = this.specificationRepository.findByName(name)

    if (specificationsAlreadExist) {
      throw new Error("Specification Alread exist")
    }

    this.specificationRepository.create({ name, description })
  }
}

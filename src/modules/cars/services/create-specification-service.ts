import { ISpecificationRepository } from "../repositories/specification/protocols/specification-protocols";

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) { }
  create({ name, description }: IRequest): void {
    const specificationsAlreadExist = this.specificationRepository.findByName(name)

    if (specificationsAlreadExist) {
      throw new Error("Specification Alread exist")
    }

    this.specificationRepository.create({ name, description })
  }
}

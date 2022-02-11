import { Specification } from "../../entities/specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../specification-protocols";

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[]

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification {

    const specification = this.specifications.find(
      specification => specification.name === name
    )

    return specification
  }
}

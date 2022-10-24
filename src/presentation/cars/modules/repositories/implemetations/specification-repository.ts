import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../specification-protocols";

export class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description,
            created_at: new Date(),
        });
        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name });

        return specification;
    }

    async findById(id: string[]): Promise<Specification[]> {
        const allSpecification = await this.repository.findByIds(id);

        return allSpecification;
    }
}

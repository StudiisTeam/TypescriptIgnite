import { Specification } from "../entities/specification";

export interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

export interface ISpecificationRepository {
    create({ name, description }: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
    findById(id: string[]): Promise<Specification[]>;
}

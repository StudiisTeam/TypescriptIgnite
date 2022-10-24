import { Category } from "../entities/category";
import { ICreateCategoryDTO } from "../dtos/create-category";

export interface ICategoriesRepository {
    findByName(name: string): Promise<Category>
    create({ name, description }: ICreateCategoryDTO): Promise<void>
    list(): Promise<Category[]>
}

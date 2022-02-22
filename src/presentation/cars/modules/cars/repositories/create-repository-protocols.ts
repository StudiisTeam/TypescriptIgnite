import { Category } from "../entities/category";
import { ICreateCategoryDTO } from "../helper/category-helper";

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  create({ name, description }: ICreateCategoryDTO): Promise<void>
  list(): Promise<Category[]>
}

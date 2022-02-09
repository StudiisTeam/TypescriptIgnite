import { ICreateCategoryDTO } from "../../helper/category-helper";
import { Category } from "../../entities/category";

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category>
  create({ name, description }: ICreateCategoryDTO): Promise<void>
  list(): Promise<Category[]>
}

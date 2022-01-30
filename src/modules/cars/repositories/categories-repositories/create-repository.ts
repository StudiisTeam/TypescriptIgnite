import { ICreateCategoryDTO } from "../../helper/category-helper";
import { Category } from "../../model/category";

export interface ICreateCategoriesRepository {
  findByName(name: string): Category
  create({ name, description }: ICreateCategoryDTO): void
  list(): Category[]
}

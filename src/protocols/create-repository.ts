import { Category } from "../model/category";
import { ICreateCategoryDTO } from '../helper/category-helper'

export interface ICreateCategoriesRepository {
  findByName(name: string): Category
  create({ name, description }: ICreateCategoryDTO): void
  list(): Category[]
}

import { Category } from "../../entities/category";
import { ICreateCategoryDTO } from "../../helper/category-helper";
import { ICategoriesRepository } from "../create-repository-protocols";

export class CategoryRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = []
  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category()
    Object.assign(category, {
      name, description
    })
    this.categories.push(category)
  }
  async list(): Promise<Category[]> {
    const listCategory = this.categories
    return listCategory
  }

}

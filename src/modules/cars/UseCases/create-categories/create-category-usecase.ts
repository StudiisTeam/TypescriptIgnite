import { ICreateCategoryDTO } from "../../helper/category-helper"
import { ICreateCategoriesRepository } from "../../repositories/categories-repositories/protocols/create-repository"

export class CreateCategoryUseCase {
  private categoriesRepository: ICreateCategoriesRepository
  constructor(categoriesRepository: ICreateCategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }
  create({ name, description }: ICreateCategoryDTO): void {
    const categoryAlreadExist = this.categoriesRepository.findByName(name)
    if (categoryAlreadExist) {
      throw new Error("Category alread exist")
    }
    this.categoriesRepository.create({ name, description })
  }
}

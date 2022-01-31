import { ICreateCategoryDTO } from "../../helper/category-helper"
import { ICategoriesRepository } from "../../repositories/categories-repositories/create-repository"


export class CreateCategoryUseCase {

  constructor(private categoriesRepository: ICategoriesRepository) { }
  create({ name, description }: ICreateCategoryDTO): void {
    const categoryAlreadExist = this.categoriesRepository.findByName(name)
    if (categoryAlreadExist) {
      throw new Error("Category alread exist")
    }
    this.categoriesRepository.create({ name, description })
  }
}


import { CategoriesRepository } from "../../repositories/implemetations/categories-repository";
import { CreateCategoryUseCase } from "./create-category-usecase";
import { CreateCategoryController } from "./create-category.controller";

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository()
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
  const createCategoryController = new CreateCategoryController(createCategoryUseCase)

  return createCategoryController
}

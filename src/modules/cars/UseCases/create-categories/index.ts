
import { CategoriesRepository } from "../../repositories/implemetations/categories-repository";
import { CreateCategoryUseCase } from "./create-category-usecase";
import { CreateCategoryController } from "./create-category.controller";

const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
export const createCategoryController = new CreateCategoryController(createCategoryUseCase)

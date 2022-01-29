import { CategoriesRepository } from "../../repositories/categories-repositories/categories-repository";
import { ListCategoriesUseCase } from "./list-categories-usecase";
import { ListCategoryController } from "./list-categories.controller";

const categoryRepository = new CategoriesRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)
export const listCategoryController = new ListCategoryController(listCategoriesUseCase)

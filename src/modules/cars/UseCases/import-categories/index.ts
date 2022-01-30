import { ImportCategoriesController } from "./import-categories-controller";
import { ImportCategoryUseCase } from "./import-categories-usecase";

const importCategoryUseCase = new ImportCategoryUseCase()
export const importCategoriesController = new ImportCategoriesController(importCategoryUseCase)

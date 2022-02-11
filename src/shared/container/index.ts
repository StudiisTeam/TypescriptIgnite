import { container } from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/create-repository";
import { CategoriesRepository } from "../../modules/cars/repositories/implemetations/categories-repository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

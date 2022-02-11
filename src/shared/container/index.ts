import { container } from "tsyringe";
import { CategoriesRepository, SpecificationRepository } from "../../modules/cars/repositories/implemetations";
import { ICategoriesRepository } from "../../modules/cars/repositories/create-repository-protocols";
import { ISpecificationRepository } from "../../modules/cars/repositories/specification-protocols";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
)

import { container } from "tsyringe";
import { CategoriesRepository, SpecificationRepository } from "../../modules/cars/repositories/implemetations";
import { ICategoriesRepository } from "../../modules/cars/repositories/create-repository-protocols";
import { ISpecificationRepository } from "../../modules/cars/repositories/specification-protocols";
import { IUsersRepository } from "../../modules/account/repositories/IUsersRepositories";
import { UserRepository } from "../../modules/account/implementations/users-repositories";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
)

container.registerSingleton<IUsersRepository>(
  "UserRepository",
  UserRepository
)

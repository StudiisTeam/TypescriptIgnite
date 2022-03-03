import { container } from "tsyringe";
import {
  CategoriesRepository,
  SpecificationRepository,
} from "../../presentation/cars/modules/cars/repositories/implemetations";
import { ICategoriesRepository } from "../../presentation/cars/modules/cars/repositories/create-repository-protocols";
import { ISpecificationRepository } from "../../presentation/cars/modules/cars/repositories/specification-protocols";
import { IUsersRepository } from "../../presentation/user/modules/account/repositories/IUsersRepositories";
import { UserRepository } from "../../presentation/user/modules/account/implementations/users-repositories";
import { ICarRepository } from "presentation/cars/modules/cars/repositories/car-repository-protocols";
import { CarRepository } from "presentation/cars/modules/cars/repositories/implemetations/car-repository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
container.registerSingleton<ICarRepository>("CarRepository", CarRepository);

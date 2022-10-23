import { ICarRepository } from "presentation/cars/modules/repositories/car-repository-protocols";
import { ICategoriesRepository } from "presentation/cars/modules/repositories/create-repository-protocols";
import { CategoriesRepository, SpecificationRepository } from "presentation/cars/modules/repositories/implemetations";
import { CarRepository } from "presentation/cars/modules/repositories/implemetations/car-repository";
import { ISpecificationRepository } from "presentation/cars/modules/repositories/specification-protocols";
import { UserRepository } from "presentation/user/modules/account/implementations/users-repositories";
import { IUsersRepository } from "presentation/user/modules/account/repositories/IUsersRepositories";
import { container } from "tsyringe";


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

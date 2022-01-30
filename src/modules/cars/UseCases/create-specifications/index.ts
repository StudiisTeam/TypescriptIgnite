import { SpecificationRepository } from "../../repositories/implemetations/specification-repository";
import { CreateCategoryUseCase } from "../create-categories/create-category-usecase";
import { CreateCategoryController } from "../create-categories/create-category.controller";
import { CreateSpecificationController } from "./create-specification-controller";
import { CreateSpecificationUseCase } from "./create-specification-use-cases";

const specificationRepository = new SpecificationRepository()
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
export const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

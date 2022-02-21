import { CategoryRepositoryInMemory } from "../../repositories/in-memory/categories-repository-in-memory";
import { CreateCategoryUseCase } from "./create-category-usecase";

let categoriesRepository: CategoryRepositoryInMemory
let createCategoryUseCase: CreateCategoryUseCase

describe('Create Category', () => {

  beforeEach(() => {
    categoriesRepository = new CategoryRepositoryInMemory()
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
  })

  test('should call create with a correct values', async () => {
    const category = {
      name: "any_Category",
      description: "any_descritption"
    }
    await createCategoryUseCase.create(category)

    const categoryCreated = await categoriesRepository.findByName(category.name)
    expect(categoryCreated).toHaveProperty("id")
  })
});

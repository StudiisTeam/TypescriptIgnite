import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../../errors/app-erros";
import { ICreateCategoryDTO } from "../../dtos/create-category";
import { ICategoriesRepository } from "../../repositories/create-repository-protocols";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadExist = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadExist) {
      throw new AppError("Category alread exist");
    }

    this.categoriesRepository.create({ name, description });
  }
}

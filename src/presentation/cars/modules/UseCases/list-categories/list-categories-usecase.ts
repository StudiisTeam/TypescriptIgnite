import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../repositories/create-repository-protocols";

@injectable()
export class ListCategoriesUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute(): Promise<Category[]> { return await this.categoriesRepository.list() }
}

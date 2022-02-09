import { ICreateCategoryDTO } from "../../helper/category-helper";
import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../categories-repositories/create-repository";
import { getRepository, Repository } from "typeorm";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  // public static getInstance() {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository()
  //   }
  //   return CategoriesRepository.INSTANCE
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {

    const category = this.repository.create({
      description,
      name
    })

    await this.repository.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({ name })
    return category
  }
}

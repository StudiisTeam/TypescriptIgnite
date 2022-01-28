import { ICreateCategoryDTO } from "../helper/category-helper";
import { Category } from "../model/category";
import { ICreateCategoriesRepository } from "../protocols/create-repository";

export class PostegresRepository implements ICreateCategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }
  list(): Category[] {
    return null
  }
  findByName(name: string): Category {
    return null
  }
}

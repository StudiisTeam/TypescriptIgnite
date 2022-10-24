import { Router } from 'express'
import multer from 'multer'
import { CreateCategoryController } from '../modules/UseCases/create-categories/create-category.controller'
import { ImportCategoriesController } from '../modules/UseCases/import-categories/import-categories-controller'
import { ListCategoryController } from '../modules/UseCases/list-categories/list-categories.controller'

export const categoriesRoutes = Router()
const upload = multer({ dest: "./tmp" })

const createCategoryController = new CreateCategoryController()
const importCategoriesController = new ImportCategoriesController()
const listCategoryController = new ListCategoryController()

categoriesRoutes.post('/create', createCategoryController.handle)

categoriesRoutes.get('/', listCategoryController.handle)

categoriesRoutes.post("/import", upload.single('file'), importCategoriesController.handle)

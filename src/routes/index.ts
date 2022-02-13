import { Router } from "express";
import { authRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./users.routes";

export const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specification", specificationRoutes)
router.use("/users", userRoutes)
router.use(authRoutes)


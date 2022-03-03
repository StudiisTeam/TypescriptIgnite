import { Router } from "express";
import { userRoutes } from "../../presentation/user/routes/users.routes";
import { authRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "../../presentation/cars/routes/categories.routes";
import { specificationRoutes } from "../../presentation/cars/routes/specification.routes";
import { carRoutes } from "presentation/cars/routes/car.routes";

export const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specification", specificationRoutes);
router.use("/users", userRoutes);
router.use("/cars", carRoutes);
router.use(authRoutes);

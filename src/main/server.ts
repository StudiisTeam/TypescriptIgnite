import createConnetion from "../infra/database";
import "../shared/container";

import express from "express";

import { HttpHelper } from "../helper/http-helper";
import { router } from "./routes";

import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger.json";

createConnetion();
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(HttpHelper);

app.listen(3333, () =>
  console.log("Server is running in http://localhost:3333")
);

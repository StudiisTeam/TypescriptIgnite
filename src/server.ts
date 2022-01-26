import express from "express";
import { createCourse } from "./routes";

const app = express()

app.use(express.json())

app.get("/", createCourse)

app.listen(3333, () => console.log("Server is running in http://localhost:3333"))

import express from "express";

const app = express()

app.use(express.json())

app.post("/create", (request, response) => {
  const { name } = request.body
  return response.json({ name })
})

app.listen(3333, () => console.log("Server is running in http://localhost:3333"))

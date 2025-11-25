import express from "express";
import { router } from "./routes/users.js";
import mongoose from "mongoose";
import cors from "cors";
import { foods } from "./routes/foods.js";
import { foodscategory } from "./routes/foodscategory.js";
import { ordered } from "./routes/foodsOrder.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/users", router);
app.use("/food", foods);
app.use("/foodcategory", foodscategory);
app.use("/orders", ordered);

mongoose
  .connect("mongodb+srv://agustd:44939@cluster0.dzpfmw0.mongodb.net/")
  .then(() => console.log("connected"));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/users`);
});

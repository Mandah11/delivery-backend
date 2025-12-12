import express from "express";
import { getFoodCategory } from "../resolvers/foodCategory/get-foodCategory.js";
import { UpdateFoodCategory } from "../resolvers/foodCategory/update-foodCategory.js";
import { DeletedbFoodCategory } from "../resolvers/foodCategory/delete-foodCategory.js";
import { CreatedbFoodCategory } from "../resolvers/foodCategory/create-foodCategory.js";

export const foodscategory = express.Router();

foodscategory.get("/", getFoodCategory);
foodscategory.post("/", CreatedbFoodCategory);
foodscategory.put("/", UpdateFoodCategory);
foodscategory.delete("/", DeletedbFoodCategory);

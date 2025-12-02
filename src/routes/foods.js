import express from "express";
import { getFood } from "../resolvers/foods/get-food.js";
import { CreateFood } from "../resolvers/foods/create-food.js";
import { UpdateFood } from "../resolvers/foods/update-food.js";
import { DeleteFood } from "../resolvers/foods/delete-food.js";
import { findIdFood } from "../resolvers/foods/findid-food.js";
import { protect } from "../resolvers/middleware/authMiddleware.js";

export const foods = express.Router();

foods.get("/", getFood);
foods.get("/findId/:id", findIdFood);
foods.post("/", protect, CreateFood);
foods.put("/", protect, UpdateFood);
foods.delete("/", protect, DeleteFood);

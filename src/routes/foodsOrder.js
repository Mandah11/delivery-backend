import express from "express";
import { getFoodserverorder } from "../resolvers/foodorder/get-foodOrd.js";
import { CreateFoodserverorder } from "../resolvers/foodorder/create-foodOrd.js";
import { UpdateFoodserverorder } from "../resolvers/foodorder/update-foodOrd.js";
import { DeleteFoodserverorder } from "../resolvers/foodorder/delete-foodOrd.js";

export const ordered = express.Router();

ordered.get("/", getFoodserverorder);

ordered.post("/", CreateFoodserverorder);
ordered.put("/", UpdateFoodserverorder);
ordered.delete("/", DeleteFoodserverorder);

import { FoodModel } from "../../model/model-food.js";

export const getFood = async (req, res) => {
  const dbFood = await FoodModel.find().populate("category");

  res.status(200).json(dbFood);
};

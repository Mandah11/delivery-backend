import { FoodServerOrder } from "../../model/model-order.js";

export const getFoodserverorder = async (req, res) => {
  const dbFoodserverorder = await FoodServerOrder.find();

  res.status(200).json(dbFoodserverorder);
};

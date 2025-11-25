import { FoodModel } from "../../model/model-food.js";

export const findIdFood = async (req, res) => {
  console.log(req.params.id);

  const dbFindId = await FoodModel.find({
    category: req.params.id,
  });

  res.status(200).json(dbFindId);
};

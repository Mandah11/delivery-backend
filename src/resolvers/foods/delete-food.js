import { FoodModel } from "../../model/model-food.js";
export const DeleteFood = async (req, res) => {
  const dbFood = await FoodModel.findByIdAndDelete(req.body.id, {
    foodName: req.body.foodName,
    price: req.body.price,
    image: req.body.image,
    ingredients: req.body.ingredients,
    category: req.body.category,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });
  res.status(200).json(dbFood);
};

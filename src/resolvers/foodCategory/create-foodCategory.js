import { FoodCategoryModel } from "../../model/model-foodCategory.js";
export const CreatedbFoodCategory = async (req, res) => {
  const dbFoodCategory = await FoodCategoryModel.create({
    categoryName: req.body.categoryName,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  res.status(200).json(dbFoodCategory);
};

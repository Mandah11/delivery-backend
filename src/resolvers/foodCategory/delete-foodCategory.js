import { FoodCategoryModel } from "../../model/model-foodCategory.js";
export const DeletedbFoodCategory = async (req, res) => {
  const dbFoodCategory = await FoodCategoryModel.findByIdAndDelete(
    req.body.id,
    {
      categoryName: req.body.categoryName,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    }
  );
  res.status(200).json(dbFoodCategory);
};

import { FoodModel } from "../../model/model-food.js";
import { FoodCategoryModel } from "../../model/model-foodCategory.js";

export const getFoodCategory = async (req, res) => {
  const dbFoodCategory = await FoodCategoryModel.find();

  const categories = await Promise.all(
    dbFoodCategory.map(async (cur) => {
      const foods = await FoodModel.find({ category: cur._id });
      return {
        _id: cur._id,
        categoryName: cur.categoryName,
        food: foods.length,
      };
    })
  );
  res.status(200).json(categories);
};
{
  /* <div className="mb-10">
      <p className="ml-5 h-18  flex items-center">{FoodcategoryName}</p>
      <div className="w-[1131px] flex flex-wrap gap-4 ml-5">
        <div className="w-[270px] h-[241px] bg-blue-500 rounded-2xl flex flex-col items-center justify-evenly">
          <div className="w-[238px] h-[129px] bg-amber-200"></div>
          <div className="w-[238px] h-[60px] bg-amber-800 flex flex-col justify-between items-center">
            <div className="h-5 bg-blue-300 flex justify-between w-[220px] ">
              <p>{foodname}</p>
              <p>{price}</p>
            </div>
            <div className="h-8 bg-gray-700">{inform}</div>
          </div>
        </div>
      </div>
    </div> */
}

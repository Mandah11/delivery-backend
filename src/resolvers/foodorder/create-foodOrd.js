import { FoodServerOrder } from "../../model/model-order.js";
import { UserModel } from "../../model/model-user.js";

export const CreateFoodserverorder = async (req, res) => {
  const dbFoodserverorder = await FoodServerOrder.create({
    user: req.body.user,
    totalPrice: req.body.totalPrice,
    foodOrderItems: req.body.foodOrderItems,
    status: req.body.status,
    deliveryaddress: req.body.deliveryaddress,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  await UserModel.findByIdAndUpdate(req.body.id, {
    orderedFoods: [dbFoodserverorder._id],
  });

  // yaj update hiihve
  // yaj array field d nemeh ve (push)

  res.status(200).json(dbFoodserverorder);
};

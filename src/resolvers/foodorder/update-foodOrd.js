import { FoodServerOrder } from "../../model/model-order.js";

export const UpdateFoodserverorder = async (req, res) => {
  const dbFoodserverorder = await FoodServerOrder.findByIdAndUpdate(
    req.body.id,
    {
      user: req.body.user,
      totalPrice: req.body.totalPrice,
      foodOrderItems: req.body.foodOrderItems,
      status: req.body.status,
      deliveryaddress: req.body.deliveryaddress,
      createdAt: req.body.createdAt,
      updatedAt: req.body.updatedAt,
    }
  );
  res.status(200).json(dbFoodserverorder);
};

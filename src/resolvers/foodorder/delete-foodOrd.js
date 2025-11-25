import { FoodServerOrder } from "../../model/model-order.js";

export const DeleteFoodserverorder = async (req, res) => {
  const dbFoodserverorder = await FoodServerOrder.findByIdAndDelete(
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

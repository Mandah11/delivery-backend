import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// const FoodOrderItemSchema = new Schema({
//   food: { type: ObjectId, ref: "Food" },
//   quantity: Number,
// });

const FoodServerOrderSchema = new Schema({
  id: ObjectId,
  user: { type: ObjectId, ref: "User" },
  totalPrice: Number,
  foodOrderItems: [
    {
      food: { type: ObjectId, ref: "Food" },
      quantity: Number,
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
  },
  deliveryaddress: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const FoodServerOrder = mongoose.model(
  "FoodOrder",
  FoodServerOrderSchema
);

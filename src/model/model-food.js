import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodSchema = new Schema({
  id: ObjectId,
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: {
    type: ObjectId,
    ref: "FoodCategory",
  },
  createdAt: Date,
  updatedAt: Date,
});
export const FoodModel = mongoose.model("Food", FoodSchema);

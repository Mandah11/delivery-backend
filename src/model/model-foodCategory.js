import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodCategorySchema = new Schema({
  id: ObjectId,
  categoryName: String,
});

export const FoodCategoryModel = mongoose.model(
  "FoodCategory",
  FoodCategorySchema
);

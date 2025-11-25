import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  email: String,
  password: String,
  phonenumber: Number,
  address: String,
  ttl: Date,
  orderedFoods: ObjectId,
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
  },
  isVerified: String,
  createdAt: Date,
  updatedAt: Date,
});
export const UserModel = mongoose.model("User", UserSchema);

import { UserModel } from "../../model/model-user.js";
import jwt from "jsonwebtoken";
export const getUser = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { id } = jwt.verify(token, "secret-key");
    const dbUsers = await UserModel.findById(id);
    res.status(200).json({ message: "USER", user: dbUsers, id });
  } catch (err) {
    console.log(err);
  }
};

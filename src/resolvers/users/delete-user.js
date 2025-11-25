import { UserModel } from "../../model/model-user.js";

import jwt from "jsonwebtoken";

export const DeleteUser = async (req, res) => {
  const dbUsers = await UserModel.findByIdAndDelete(req.body.id);
  res.status(200).json({ message: "Deleted", deletedId: dbUsers });
  const token = req.headers.authorization;
  try {
    jwt.verify(token, "secret-key");
    const dbUsers = await UserModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "Deleted", deletedId: dbUsers });
  } catch (err) {
    console.log(err);
    res.status(401).send("Unauthorized");
  }
};

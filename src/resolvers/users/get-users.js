import { UserModel } from "../../model/model-user.js";

export const getUsers = async (req, res) => {
  const dbUsers = await UserModel.find();
  console.log(dbUsers);

  res.status(200).json(dbUsers);
};

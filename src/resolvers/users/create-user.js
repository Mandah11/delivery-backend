import { UserModel } from "../../model/model-user.js";
import bcrypt from "bcryptjs";
export const CreateUser = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const dbUsers = await UserModel.create({
    email: req.body.email,
    password: hashedPassword,
    phonenumber: req.body.phonenumber,
    address: req.body.address,
    ttl: req.body.ttl,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });

  res.status(200).json(dbUsers);
};

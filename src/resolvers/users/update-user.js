import { UserModel } from "../../model/model-user.js";
export const UpdateUser = async (req, res) => {
  const dbUsers = await UserModel.findByIdAndUpdate(req.body.id, {
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

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserModel } from "../../model/model-user.js";

export const login = async (req, res) => {
  const body = req.body;

  const user = await UserModel.findOne({ email: body.email });
  if (!user) {
    res.status(401).json({
      message: "Invalid email or password",
    });
  }
  const result = await bcrypt.compare(body.password, user.password);

  console.log("hfsgsd", user);

  if (result === true) {
    const token = jwt.sign(
      { email: user.email, id: user._id, role: user.role },
      "secret-key"
    );

    return res.send({
      message: `User ${body.email} logged in!`,
      token: token,
      user: user,
    });
  }
  res.send("Invalid email or password");
};

//        ____________
//       |   Hello    |
//       |   Mandah   |
//       |____   _____|
//           | /
//    (\__/) |/
//    ( •-•)
//    ( > 🍎

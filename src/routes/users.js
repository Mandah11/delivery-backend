import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { CreateUser } from "../resolvers/users/create-user.js";
import { UpdateUser } from "../resolvers/users/update-user.js";
import { DeleteUser } from "../resolvers/users/delete-user.js";
import { login } from "../resolvers/users/log-users.js";
import { getUser } from "../resolvers/users/get-user.js";

export const router = express.Router();

router.get("/", getUsers);
router.post("/", CreateUser);
router.post("/login", login);
router.put("/", UpdateUser);
router.delete("/", DeleteUser);
router.get("/me", getUser);

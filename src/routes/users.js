import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { CreateUser } from "../resolvers/users/create-user.js";
import { UpdateUser } from "../resolvers/users/update-user.js";
import { DeleteUser } from "../resolvers/users/delete-user.js";
import { login } from "../resolvers/users/log-users.js";
import { getUser } from "../resolvers/users/get-user.js";
import { protect } from "../resolvers/middleware/authMiddleware.js";

export const router = express.Router();

router.get("/", protect, getUsers);
router.post("/", CreateUser);
router.post("/login", login);
router.put("/", protect, UpdateUser);
router.delete("/", protect, DeleteUser);
router.get("/me", protect, getUser);

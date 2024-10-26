import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../../db/models/user.model.js";
import ApiError from "../../utils/apiError.js";

import { asyncHandler } from "../../middlewares/errorHandller.middleware.js";

export const addUser = asyncHandler(async (req, res, next) => {
  const { email, password, role, name } = req.body;

  const user = await User.create({
    email,
    password,
    role,
    name,
  });
  res.status(201).json({
    status: "success",
    message: "User added successfully",
    user,
  });
});

import express from "express";
import cors from "cors";
import { config } from "dotenv";

import dbConnection from "./src/db/dbConnection.js";
import { globalError } from "./src/middlewares/errorHandller.middleware.js";
import ApiError from "./src/utils/apiError.js";

import authRoutes from "./src/modules/auth/routes.js";
import userRoutes from "./src/modules/user/routes.js";
import patientRoutes from "./src/modules/patient/routes.js";
import queueRoutes from "./src/modules/queu/routes.js";
config();

dbConnection();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/patients", patientRoutes);
app.use("/queue", queueRoutes);
app.use("*", (req, res, next) => {
  next(new ApiError(`Can not find this route ${req.originalUrl}`, 400));
});
app.use(globalError);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

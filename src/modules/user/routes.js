import { Router } from "express";
import { addUser } from "./controller.js";

const router = Router();

router.post("/add-user", addUser);
export default router;

import { Router } from "express";
import { addPatient, getPatients } from "./controller.js";

const router = Router();

router.route("/").post(addPatient).get(getPatients);

export default router;

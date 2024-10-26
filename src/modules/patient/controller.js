import Patient from "../../db/models/patient.schema.js";
import { asyncHandler } from "../../middlewares/errorHandller.middleware.js";

export const addPatient = asyncHandler(async (req, res, next) => {
  const { name, age, gender, phone, address, medicalHistory } = req.body;
  const newPatient = await Patient.create({
    name,
    age,
    gender,
    phone,
    address,
    medicalHistory,
  });

  res.status(200).json({
    statusbar: "success",
    message: "Patient added successfully",
    data: newPatient,
  });
});

export const getPatients = asyncHandler(async (req, res, next) => {
  const patients = await Patient.find();

  res.status(200).json({ status: "success", data: patients });
});

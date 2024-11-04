import Counter from "../../db/models/counter.model.js";
import Patient from "../../db/models/patient.schema.js";
import Ticket from "../../db/models/ticket.model.js";
import { asyncHandler } from "../../middlewares/errorHandller.middleware.js";

export const addPatient = asyncHandler(async (req, res, next) => {
  const { name, age, gender, phone, address, medicalCondition, queueTicket } =
    req.body;
  const newPatient = await Patient.create({
    name,
    age,
    gender,
    phone,
    address,
    medicalCondition,
    queueTicket,
  });

  const counter = await Counter.findOneAndUpdate(
    { name: "ticket" },
    { $inc: { value: 1 } },
    { new: true, upsert: true }
  );
  const ticketNumber = counter.value;
  const ticketCode = `T-${ticketNumber}-${Date.now().toString().slice(-4)}`;
  const ticket = await Ticket.create({
    patient: newPatient._id,
    ticketNumber,

    ticketCode,
  });

  res.status(200).json({
    statusbar: "success",
    message: "Patient added successfully",
    newPatient,
    ticket,
  });
});

export const getPatients = asyncHandler(async (req, res, next) => {
  const patients = await Patient.find();

  res.status(200).json({ status: "success", data: patients });
});

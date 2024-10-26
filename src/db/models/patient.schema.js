import { model, Schema } from "mongoose";

const patientSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },

    medicalHistory: { type: [String], required: true },
  },
  { timestamps: true }
);

const Patient = model("Patient", patientSchema);
export default Patient;

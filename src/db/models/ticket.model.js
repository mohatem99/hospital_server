import { Schema, model } from "mongoose";

const ticketSchema = new Schema({
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  ticketNumber: { type: Number, required: true },
  ticketCode: { type: String, unique: true, required: true },
  status: {
    type: String,
    enum: ["waiting", "in-progress", "completed"],
    default: "waiting",
  },
});

const Ticket = model("Ticket", ticketSchema);

export default Ticket;

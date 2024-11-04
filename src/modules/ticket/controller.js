import Ticket from "../../db/models/ticket.model.js";
import { asyncHandler } from "../../middlewares/errorHandller.middleware.js";

export const getTickets = asyncHandler(async (req, res, next) => {
  const { status } = req.query;
  const filter = status ? { status } : {};

  const tickets = await Ticket.find(filter);
  res.status(200).json({ status: "success", tickets });
});

export const updateTicketStatus = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const { status } = req.body;
  console.log(status);
  const ticket = await Ticket.findByIdAndUpdate(id, { status }, { new: true });
  if (!ticket) {
    return next(new ApiError("Ticket not found", 404));
  }
  res.status(200).json({ status: "success", ticket });
});

export const getNextTicket = asyncHandler(async (req, res, next) => {
  const ticket = await Ticket.findOne({ status: "waiting" }).sort({
    ticketNumber: 1,
  });
  if (!ticket) {
    return next(new ApiError("No waiting tickets", 404));
  }
  res.status(200).json({ status: "success", ticket });
});

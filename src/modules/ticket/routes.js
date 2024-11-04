import { Router } from "express";
import { getTickets, updateTicketStatus, getNextTicket } from "./controller.js";
const router = Router();

router.get("/", getTickets);
router.put("/:id", updateTicketStatus);
router.get("/next", getNextTicket);
export default router;

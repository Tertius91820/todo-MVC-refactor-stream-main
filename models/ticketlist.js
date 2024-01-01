const mongoose = require("mongoose");

const ticketListSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  severity: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    default: "Open",
  },
});

module.exports = mongoose.model("TicketList", ticketListSchema, "tickets");

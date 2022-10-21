const express = require("express");
const moongose = require("mongoose");
const {
  bookCab,
  bookFlight,
  bookTrain,
} = require("../Controller/booking.controller");
const BookingRouter = express.Router();

BookingRouter.post("/bookCab", bookCab);
BookingRouter.post("bookFlight", bookFlight);
BookingRouter.post("/bookTrain", bookTrain);
module.exports = BookingRouter;

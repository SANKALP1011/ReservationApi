const express = require("express");
const moongose = require("mongoose");
const {
  bookCab,
  bookFlight,
  bookTrain,
  cancelBooking,
  showBookingDetails,
} = require("../Controller/booking.controller");
const AuthenticationToken = require("../Middleware/AuthToken");
const BookingRouter = express.Router();

BookingRouter.post("/bookCab", AuthenticationToken, bookCab);
BookingRouter.post("/bookFlight", AuthenticationToken, bookFlight);
BookingRouter.post("/bookTrain", AuthenticationToken, bookTrain);
BookingRouter.post("/cancelBooking", AuthenticationToken, cancelBooking);
BookingRouter.get(
  "/bookingDetails/:id",
  AuthenticationToken,
  showBookingDetails
);
module.exports = BookingRouter;

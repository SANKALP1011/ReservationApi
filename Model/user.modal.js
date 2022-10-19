const express = require("express");
const moongose = require("mongoose");

const UserSchema = new moongose.Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    hasBooking: {
      type: String,
      default: false,
    },
    UserBookingDetails: [
      {
        BookingId: {
          type: Number,
        },
        BookingType: {
          type: String,
        },
        BookingPrice: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = moongose.model("User", UserSchema);

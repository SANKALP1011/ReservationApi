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
          default: 0,
        },
        BookingType: {
          type: String,
          default: "",
        },
        BookingPrice: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = moongose.model("User", UserSchema);

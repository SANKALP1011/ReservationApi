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
      type: Boolean,
      default: false,
    },
    UserBookingDetails: [],
  },
  { timestamps: true }
);
module.exports = moongose.model("user", UserSchema);

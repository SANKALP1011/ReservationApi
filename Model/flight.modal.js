const express = require("express");
const moongose = require("mongoose");

const flightSchema = new moongose.Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    FlightDetails: [
      {
        FlightName: {
          type: String,
          required: true,
        },
        FlightCompany: {
          type: String,
          required: true,
        },
        FlightArrivalLoc: {
          type: String,
          required: true,
        },
        FlightDestLoc: {
          type: String,
          required: true,
        },
        isFlightBooked: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = moongose.model("Flights", flightSchema);

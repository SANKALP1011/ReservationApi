const express = require("express");
const moongose = require("mongoose");

const flightSchema = new moongose.Schema(
  {
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
        FlightPrice: {
          type: Number,
          default: null,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = moongose.model("Flights", flightSchema);

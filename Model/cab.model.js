const express = require("express");
const moongose = require("mongoose");

const CabSchema = new moongose.Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    CabDetails: [
      {
        CabName: {
          type: String,
          required: true,
        },
        CabType: {
          type: String,
          required: true,
        },
        CabsList: {
          type: Array,
        },
        CabArivalLocation: {
          type: String,
          required: true,
        },
        CabDestinationLocation: {
          type: String,
          required: true,
        },
        isCabBooked: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = moongose.model("Cabs", CabSchema);

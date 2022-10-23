const express = require("express");
const moongose = require("mongoose");

const CabSchema = new moongose.Schema(
  {
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
        Price: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = moongose.model("Cabs", CabSchema);

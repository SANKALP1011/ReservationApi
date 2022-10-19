const express = require("express");
const moongose = require("mongoose");

const TrainSchema = new moongose.Schema(
  {
    UserId: {
      type: String,
      required: true,
    },
    TrainDetails: [
      {
        TrainName: {
          type: String,
          required: true,
        },
        TrainArrivalLoc: {
          type: String,
          required: true,
        },
        TrainDestLoc: {
          type: String,
          required: true,
        },
        isTrainBooked: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

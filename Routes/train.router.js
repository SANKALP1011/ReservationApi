const express = require("express");
const {
  AddTrains,
  getTrainsById,
  getTrains,
  limitedTrainResult,
} = require("../Controller/train.controller");
const TrainRouter = express.Router();

TrainRouter.post("/addTrains", AddTrains);
TrainRouter.get("/allTrains", getTrains);
TrainRouter.get("/trains/:id", getTrainsById);
TrainRouter.get("/limitTrains", limitedTrainResult);
module.exports = TrainRouter;

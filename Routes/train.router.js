const express = require("express");
const {
  AddTrains,
  getTrainsById,
  getTrains,
  limitedTrainResult,
} = require("../Controller/train.controller");
const TrainRouter = express.Router();
const AuthenticationToken = require("../Middleware/AuthToken");

TrainRouter.post("/addTrains", AuthenticationToken, AddTrains);
TrainRouter.get("/allTrains", AuthenticationToken, getTrains);
TrainRouter.get("/trains/:id", AuthenticationToken, getTrainsById);
TrainRouter.get("/limitTrains", AuthenticationToken, limitedTrainResult);
module.exports = TrainRouter;

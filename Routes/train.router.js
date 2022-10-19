const express = require("express");
const { AddTrains } = require("../Controller/train.controller");
const TrainRouter = express.Router();

TrainRouter.post("/addTrains", AddTrains);
module.exports = TrainRouter;

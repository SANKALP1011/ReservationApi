const express = require("express");
const FlightRouter = express.Router();
const {
  AddFlights,
  getAllFlights,
  getFlightsById,
  limitFlightResult,
} = require("../Controller/flight.controller");

FlightRouter.post("/addFlights", AddFlights);
FlightRouter.get("/fligts", getAllFlights);
FlightRouter.get("/flight/:id", getFlightsById);
FlightRouter.get("/limitedFlight", limitFlightResult);

module.exports = FlightRouter;

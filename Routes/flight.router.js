const express = require("express");
const FlightRouter = express.Router();
const {
  AddFlights,
  getAllFlights,
  getFlightsById,
  limitFlightResult,
} = require("../Controller/flight.controller");
const AuthenticationToken = require("../Middleware/AuthToken");

FlightRouter.post("/addFlights", AuthenticationToken, AddFlights);
FlightRouter.get("/allFlights", AuthenticationToken, getAllFlights);
FlightRouter.get("/flight/:id", AuthenticationToken, getFlightsById);
FlightRouter.get("/limitedFlight", AuthenticationToken, limitFlightResult);

module.exports = FlightRouter;

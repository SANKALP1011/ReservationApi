const express = require("express");
const FlightRouter = express.Router();
const { AddFlights } = require("../Controller/flight.controller");

FlightRouter.post("/addFlights", AddFlights);

module.exports = FlightRouter;

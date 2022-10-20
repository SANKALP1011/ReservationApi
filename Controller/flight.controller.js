const express = require("express");
const moongose = require("mongoose");
const Flight = require("../Model/flight.modal");

module.exports = {
  AddFlights: async (req, res) => {
    const addFlights = new Flight({
      FlightDetails: req.body.FlightDetails,
    });
    try {
      const flight = await addFlights.save();
      return res.status(200).json(flight);
    } catch (e) {
      return res.status(200).json(e);
    }
  },
  getAllFlights: async (req, res) => {
    try {
      const flights = await Flight.find();
      return res.status(200).json(flights);
    } catch (e) {
      return res.status(200).json(e);
    }
  },
  getFlightsById: async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id);
      return res.status(200).json(flight);
    } catch (e) {
      return res.status(200).json(e);
    }
  },
  limitFlightResult: async (req, res) => {
    const query = req.query.limit;
    try {
      const flight = query
        ? await Flight.find().sort({ _id: 1 }).limit(2)
        : await Flight.find();
      return res.status(200).json(flight);
    } catch (e) {
      return res.status(200).json(e);
    }
  },
};

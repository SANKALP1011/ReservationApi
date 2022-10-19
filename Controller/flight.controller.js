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
};

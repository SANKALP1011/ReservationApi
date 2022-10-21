const express = require("express");
const moongose = require("mongoose");
const Flight = require("../Model/flight.modal");
const Train = require("../Model/train.model");
const Cab = require("../Model/cab.model");
const User = require("../Model/user.modal");

module.exports = {
  bookCab: async (req, res) => {
    //add the cab details to the user schema
    const useridquery = req.query.userid;
    const cabid = req.query.id;
    const fetchCabData = cabid ? await Cab.findById(cabid) : await Cab.find();
    try {
      const updateBookingDetails = await User.findByIdAndUpdate(
        useridquery,
        { UserBookingDetails: fetchCabData },
        (err, result) => {
          if (err) {
            return res.status.json(err);
          } else {
            return res.status(200).json(result);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  },
  bookFlight: async (req, res) => {
    const useridquery = req.query.userid;
    const flightId = req.query.id;
    const fetchFlightData = flightId
      ? await Flight.findById(flightId)
      : await Flight.find();
    try {
      const updateBookingDetails = await User.findByIdAndUpdate(
        useridquery,
        { UserBookingDetails: fetchFlightData },
        (err, result) => {
          if (err) {
            return res.status(200).json(err);
          } else {
            return res.status(200).json(result);
          }
        }
      );
    } catch (e) {
      return res.status(200).json(e);
    }
  },
  bookTrain: async (req, res) => {
    const useridquery = req.query.userid;
    const trainId = req.query.id;
    const fetchTrainData = trainId
      ? await Train.findById(trainId)
      : await Train.find();
    try {
      const updateBookingDetails = await User.findByIdAndUpdate(
        useridquery,
        { UserBookingDetails: fetchTrainData },
        (err, result) => {
          if (err) {
            return res.status(200).json(err);
          } else {
            return res.status(200).json(result);
          }
        }
      );
    } catch (e) {
      return res.status(200).json(e);
    }
  },
};

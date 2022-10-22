const express = require("express");
const moongose = require("mongoose");
const Flight = require("../Model/flight.modal");
const Train = require("../Model/train.model");
const Cab = require("../Model/cab.model");
const User = require("../Model/user.modal");
const { AuthenticationToken } = require("../Middleware/AuthToken");

module.exports = {
  bookCab: async (req, res) => {
    const useridquery = req.query.userid;
    const cabid = req.query.id;
    console.log(cabid);
    const fetchCabData = await Cab.findById({ _id: cabid });
    console.log(fetchCabData);
    try {
      const updateBookingDetails = await User.findByIdAndUpdate(useridquery, {
        hasBooking: true,
        UserBookingDetails: fetchCabData,
      })
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch((err) => {
          return res.status(500).json(err);
        });
    } catch (e) {
      console.log(e);
    }
  },
  bookFlight: async (req, res) => {
    const useridquery = req.query.userid;
    const flightId = req.query.id;
    const fetchFlightData = await Flight.findById({ _id: flightId });
    console.log(fetchFlightData);
    try {
      const updateBookingDetail = await User.findByIdAndUpdate(useridquery, {
        hasBooking: true,
        UserBookingDetails: fetchFlightData,
      })
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch((err) => {
          return res.status(500).json(err);
        });
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  bookTrain: async (req, res) => {
    const useridquery = req.query.userid;
    const trainId = req.query.id;
    const fetchTrainData = trainId
      ? await Train.findById(trainId)
      : await Train.find();
    try {
      const updateBookingDetails = await User.findByIdAndUpdate(useridquery, {
        hasBooking: true,
        UserBookingDetails: fetchTrainData,
      })
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch((err) => {
          return res.status(500).json(err);
        });
    } catch (e) {
      return res.status(200).json(e);
    }
  },
  cancelBooking: async (req, res) => {
    const useridquery = req.query.userid;
    try {
      const cancelBooking = await User.findByIdAndUpdate(
        { _id: useridquery },
        { UserBookingDetails: null }
      )
        .then((result) => {
          return res.status(200).json(result);
        })
        .catch((e) => {
          return res.status(500).json(e);
        });
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  showBookingDetails: async (req, res) => {
    const userid = req.params.id;
    try {
      const getBookingDetails = await User.findById(userid)
        .then((result) => {
          const booking = result.UserBookingDetails;
          return res.status(200).json(booking);
        })
        .catch((e) => {
          return res.status(500).json(e);
        });
    } catch (e) {
      return res.status(500).json(e);
    }
  },
};

const express = require("express");
const moongose = require("mongoose");
const Train = require("../Model/train.model");

module.exports = {
  AddTrains: async (req, res) => {
    const NewTrains = new Train({
      TrainDetails: req.body.TrainDetails,
    });
    try {
      const Tr = await NewTrains.save();
      return res.status(200).json(Tr);
    } catch (e) {
      return res.status(200).json(e);
    }
  },
  getTrains: async (req, res) => {
    try {
      const trains = await Train.find();
      return res.status(200).json(trains);
    } catch (e) {
      return res.status(200).json(e);
    }
  },
  getTrainsById: async (req, res) => {
    try {
      const train = await Train.findById(req.params.id);
      return res.status(200).json(train);
    } catch (e) {
      return res.status(200).json(e);
    }
  },
  limitedTrainResult: async (req, res) => {
    const query = req.query.limit;
    try {
      const train = query
        ? await Train.find().sort({ _id: -1 }).limit(2)
        : await Train.find();
      return res.status(200).json(train);
    } catch (e) {
      return res.status(200).json(e);
    }
  },
};

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
};

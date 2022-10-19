const express = require("express");
const moongose = require("mongoose");
const Cabs = require("../Model/cab.model");

module.exports = {
  AddCabs: async (req, res) => {
    const addTrains = new Cabs({
      CabDetails: req.body.CabDetails,
    });
    try {
      const cabs = await addTrains.save();
      return res.status(200).json(cabs);
    } catch (e) {
      return res.status.json(e);
    }
  },
};

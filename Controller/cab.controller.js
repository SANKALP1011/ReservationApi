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
  getAllCabs: async (req, res) => {
    try {
      const cabs = await Cabs.find();
      return res.status(200).json(cabs);
    } catch (err) {
      return res.status(200).json(err);
    }
  },
  getCabsById: async (req, res) => {
    try {
      const cabById = await Cabs.findById(req.params.id);
      return res.status(200).json(cabById);
    } catch (err) {
      return res.status(200).json(err);
    }
  },
  getCabsByLimitedQuery: async (req, res) => {
    const query = req.query.new;
    try {
      const cabs = query
        ? await Cabs.find().sort({ _id: -1 }).limit(2)
        : await Cabs.find();
      return res.status(200).json(cabs);
    } catch (e) {
      return res.status(200).json(e);
    }
  },
};

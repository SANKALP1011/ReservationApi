const express = require("express");
const {
  AddCabs,
  getAllCabs,
  getCabsById,
  getCabsByLimitedQuery
} = require("../Controller/cab.controller");
const CabRouter = express.Router();

CabRouter.post("/addCabs", AddCabs);
CabRouter.get("/allCabs", getAllCabs);
CabRouter.get("/cabsById/:id", getCabsById);
CabRouter.get("/limitedCabs",getCabsByLimitedQuery)
module.exports = CabRouter;

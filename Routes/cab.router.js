const express = require("express");
const {
  AddCabs,
  getAllCabs,
  getCabsById,
  getCabsByLimitedQuery,
} = require("../Controller/cab.controller");
const CabRouter = express.Router();
const AuthenticationToken = require("../Middleware/AuthToken");

CabRouter.post("/addCabs", AuthenticationToken, AddCabs);
CabRouter.get("/allCabs", AuthenticationToken, getAllCabs);
CabRouter.get("/cabsById/:id", AuthenticationToken, getCabsById);
CabRouter.get("/limitedCabs", AuthenticationToken, getCabsByLimitedQuery);
module.exports = CabRouter;

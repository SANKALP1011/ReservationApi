const express = require("express");
const { AddCabs } = require("../Controller/cab.controller");
const CabRouter = express.Router();

CabRouter.post("/addCabs", AddCabs);
module.exports = CabRouter;

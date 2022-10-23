const express = require("express");
const InitialRouter = express.Router();

InitialRouter.get("/", (req, res) => {
  res.send(
    "Welcome to the reservation api , check the github for documentation and postamn link"
  );
});
module.exports = InitialRouter;

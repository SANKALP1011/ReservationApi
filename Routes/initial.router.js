const express = require("express");
const InitialRouter = express.Router();

InitialRouter.get("/", (req, res) => {
  res.send(
    "Welcome to the reservation api , check the github for documentation and postamn link. For Swagger docs , just put /v1 as the endpoint."
  );
});
module.exports = InitialRouter;

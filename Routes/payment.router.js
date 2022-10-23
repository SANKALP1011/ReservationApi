const express = require("express");
const Payment = require("../Payment/Payment.controller");
const PaymentRouter = express.Router();

PaymentRouter.post("/payment/:id", Payment);
module.exports = PaymentRouter;

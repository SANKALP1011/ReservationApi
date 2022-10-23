const express = require("express");
require("dotenv").config({ path: require("find-config")(".env") });
const stripe = require("stripe")(process.env.STRIPE_KEY);

const Payment = (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        return res.status(200).json(result);
      }
    }
  );
};
module.exports = Payment;

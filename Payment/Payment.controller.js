const express = require("express");
require("dotenv").config({ path: require("find-config")(".env") });
const stripe = require("stripe")(process.env.STRIPE_KEY);
const User = require("../Model/user.modal");

const Payment = async (req, res) => {
  const userid = req.params.id;
  const userData = await User.findById(userid);
  await stripe.paymentIntents.create(
    {
      description: "Booking api backend",
      shipping: {
        name: userData.UserName,
        address: {
          line1: "Villa 423 , eldeco city , Lucknow",
          postal_code: "226013",
          city: "Lucknow",
          state: "UP",
          country: "India",
        },
      },
      amount: 1099,
      currency: "usd",
      payment_method_types: ["card"],
    },
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        const userid = req.params.id;
        User.findByIdAndUpdate(userid, {
          isPaymentDone: true,
        })
          .then((upadatedStatus) => {
            return res.status(200).json(result);
          })
          .catch((err) => {
            return res.status(500).json(err);
          });
      }
    }
  );
};
module.exports = Payment;

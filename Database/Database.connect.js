const express = require("express");
const mongoose = require("mongoose");

const DbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://sankalp:kebtug-zuqMyf-9syrve@reservationcluster.pj6drij.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database connected"))
    .catch((e) => {
      console.log(e);
    });
};
module.exports = DbConnect;

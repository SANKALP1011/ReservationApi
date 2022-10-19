const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || "3001";
mongoose
  .connect(
    `mongodb+srv://sankalp:kebtug-zuqMyf-9syrve@reservationcluster.pj6drij.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database connected"))
  .catch((e) => {
    console.log(e);
  });

app.listen(port, (err) => {
  console.log("connected");
});

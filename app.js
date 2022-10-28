const { urlencoded } = require("express");
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || "3001";
const Initial = require("./Routes/initial.router");
const User = require("./Routes/user.router");
const Train = require("./Routes/train.router");
const Flight = require("./Routes/flight.router");
const Cabs = require("./Routes/cab.router");
const Booking = require("./Routes/booking.router");
const Payment = require("./Routes/payment.router");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
require("dotenv").config({ path: require("find-config")(".env") });
mongoose
  .connect(
    `mongodb+srv://sankalp:kebtug-zuqMyf-9syrve@reservationcluster.pj6drij.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database connected"))
  .catch((e) => {
    console.log(e);
  });
app.use("/v1", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(Initial);
app.use(User);
app.use(Train);
app.use(Flight);
app.use(Cabs);
app.use(Booking);
app.use(Payment);
app.listen(port, (err) => {
  console.log("connected");
});

const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./Routes/user.router",
  "./Routes/booking.router",
  "./Routes/cab.router",
  "./Routes/train.router",
  "./Routes/flight.router",
  "./Routes/payment.router",
];
const doc = {
  info: {
    title: "Reservation Api",
    version: "v1.1",
    description:
      "This is the authenticated booking api where user can book their flights , cabs and trains and make the payment for it which is protected with the help of stripe.js",
  },
  host: "localhost:3001",
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  },
};
swaggerAutogen(outputFile, endpointsFiles, doc);

const express = require("express");
const UserRouter = express.Router();
const { CreateUser } = require("../Controller/user.controller");

UserRouter.post("/SignUp", CreateUser);
module.exports = UserRouter;

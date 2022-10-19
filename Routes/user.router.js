const express = require("express");
const UserRouter = express.Router();
const { CreateUser, LoginUser } = require("../Controller/user.controller");

UserRouter.post("/SignUp", CreateUser);
UserRouter.post("/LogIn", LoginUser);
module.exports = UserRouter;

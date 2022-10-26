const express = require("express");
const UserRouter = express.Router();
const { CreateUser, LoginUser } = require("../Controller/user.controller");
const AuthenticationToken = require("../Middleware/AuthToken");

UserRouter.post("/SignUp", CreateUser);
UserRouter.post("/LogIn", LoginUser);
module.exports = UserRouter;

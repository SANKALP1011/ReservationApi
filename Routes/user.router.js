const express = require("express");
const UserRouter = express.Router();
const { CreateUser, LoginUser } = require("../Controller/user.controller");
const AuthenticationToken = require("../Middleware/AuthToken");

UserRouter.post("/SignUp", AuthenticationToken, CreateUser);
UserRouter.post("/LogIn", AuthenticationToken, LoginUser);
module.exports = UserRouter;

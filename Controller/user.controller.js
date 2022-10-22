const express = require("express");
const userModal = require("../Model/user.modal");
const User = require("../Model/user.modal");
const { sign } = require("jsonwebtoken");

module.exports = {
  CreateUser: async (req, res) => {
    console.log(req.body);
    const RegisterUser = new User({
      UserName: req.body.UserName,
      Email: req.body.Email,
      Password: req.body.Password,
    });
    try {
      const newUser = await RegisterUser.save();
      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json({
        Success: "No",
        Message: error,
      });
    }
  },
  LoginUser: async (req, res) => {
    const { UserName, Password } = req.body;
    const isUser = await User.findOne({ UserName, Password });
    if (!isUser) {
      return res.status(200).json({
        Message: "User does not exist",
      });
    } else {
      const LogInToken = sign({ Password: isUser }, "RESERV12", {
        expiresIn: "24h",
      });
      const updateLoginStatus = await User.findOneAndUpdate({
        isLoggedIn: true,
      });
      return res.status(200).json({
        updateLoginStatus,
        LogInToken,
      });
    }
  },
};

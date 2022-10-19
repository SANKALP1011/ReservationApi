const express = require("express");
const userModal = require("../Model/user.modal");
const User = require("../Model/user.modal");

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
    } catch (e) {
      return res.status(500).json({
        Success: "No",
        Message: e,
      });
    }
  },
  LoginUser: async (req, res) => {
    const { UserName, Password } = req.body;
    const isUser = await User.findOne({ UserName, Password });
    if (!isUser) {
      return res.status(200).json({
        Message: "Please regsiter because this user does not exist",
      });
    } else {
      const updateLoginStatus = await User.findOneAndUpdate({
        isLoggedIn: true,
      });
      return res.status(200).json(updateLoginStatus);
    }
  },
};

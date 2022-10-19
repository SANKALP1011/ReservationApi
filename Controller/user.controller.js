const express = require("express");
const User = require("../Model/user.modal");

module.exports = {
  CreateUser: (req, res) => {
    const RegisterUser = new User({
      UserName: req.body.UserName,
      Email: req.body.Email,
      Password: req.body.Password,
    });
    try {
      const newUser = new RegisterUser.save();
      return res.status(200).json({
        Success: "Yes",
        Message: newUser,
      });
    } catch (e) {
      return res.status(500).json({
        Success: "No",
        Message: e,
      });
    }
  },
  LoginUser: async (req, res) => {},
};

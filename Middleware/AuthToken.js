const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: require("find-config")(".env") });

const AuthenticationToken = (req, res, next) => {
  const token = "RESERV12";
  let tokenHeader = req.get("authorization");
  if (tokenHeader) {
    tokenHeader = tokenHeader.slice(7);
    jwt.verify(tokenHeader, token, (err, tokenDecoded) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        req.decoded = tokenDecoded;
        next();
      }
    });
  } else {
    return res.status(500).json({
      Message: "Not authenticated",
    });
  }
};
module.exports = AuthenticationToken;

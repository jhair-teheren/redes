var cors = require("cors");
const express = require("express");

module.exports = (app =>{
  //middleware
  app.use(cors());
  app.use(express.json({ limit: "25mb"}));
  app.use(express.urlencoded({ limit: "25mb", extended: true}));
  app.use(express.static("public"));
})
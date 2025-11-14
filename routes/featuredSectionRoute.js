const express = require("express");
const authenticate = require("../middlewere/auth");
const featuredSection = require("../models/featuredSectionModel");

const featuredSectionRoute = express.Router();

featuredSectionRoute.post("/add", authenticate, async (req, res) => {
  console.log("hello", req.body);
  try {
    const data = await featuredSection.create(req.body);
    console.log(data, "data");
    return res.status(201).json({
      message: "Add Featured Section",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      message: "BAD REQUEST",
      error: error.message,
    });
  }
});

featuredSectionRoute.get("/", async (req, res) => {
  try {
    const movies = await featuredSection.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = featuredSectionRoute;

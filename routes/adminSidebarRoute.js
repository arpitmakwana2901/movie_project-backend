const express = require("express");
const adminSidebarModel = require("../models/adminSidebarModel");
const adminSidebarRoute = express.Router();

adminSidebarRoute.post("/add", async (req, res) => {
  try {
    const adminData = await adminSidebarModel.create(req.body);
    console.log(adminData, "adminData");
    return res.status(201).json({
      message: "added admin",
      adminData: adminData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "BAD REQUEST",
    });
  }
});

adminSidebarRoute.get("/", async (req, res) => {
  try {
    const sidebar = await adminSidebarModel.findOne();
    if (!sidebar) {
      return res.status(404).json({ message: "Sidebar data not found" });
    }
    res.json(sidebar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = adminSidebarRoute;

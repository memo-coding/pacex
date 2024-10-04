const mongoose = require("mongoose");
const MapsModel = require("../models/MapsModel");

const getAllMaps = async (req, res) => {
  const maps = await MapsModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from maps",
      data: maps,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const getMap = async (req, res) => {
  const { id } = req.params;
  const maps = await MapsModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from maps",
      data: maps,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllMaps,
  getMap,
};

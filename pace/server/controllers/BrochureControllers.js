const mongoose = require("mongoose");
const BrochureModel = require("../models/BrochureModel");

const getAllBrochures = async (req, res) => {
  const brochures = await BrochureModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from brochures",
      data: brochures,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const getBrochure = async (req, res) => {
  const { id } = req.params;
  const brochure = await BrochureModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from brochures",
      data: brochure,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllBrochures,
  getBrochure,
};

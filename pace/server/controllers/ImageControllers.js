const mongoose = require("mongoose");
const ImagesModel = require("../models/ImagesModel");

const getAllImages = async (req, res) => {
  const images = await ImagesModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from images",
      data: images,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const getImage = async (req, res) => {
  const { id } = req.params;
  const images = await ImagesModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from images",
      data: images,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllImages,
  getImage,
};

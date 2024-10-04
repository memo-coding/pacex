const mongoose = require("mongoose");
const NewsModel = require("../models/NewsModel");

const getAllNews = async (req, res) => {
  const news = await NewsModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from news",
      data: news,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const getNew = async (req, res) => {
  const { id } = req.params;
  const news = await NewsModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from news",
      data: news,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllNews,
  getNew,
};

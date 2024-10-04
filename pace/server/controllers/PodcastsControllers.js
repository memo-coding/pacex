const mongoose = require("mongoose");
const PodcastsModel = require("../models/PodcastsModel");

const getAllPodcasts = async (req, res) => {
  const podcasts = await PodcastsModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from podcasts",
      data: podcasts,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const getPodcast = async (req, res) => {
  const { id } = req.params;
  const podcast = await PodcastsModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from podcasts",
      data: podcast,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllPodcasts,
  getPodcast,
};

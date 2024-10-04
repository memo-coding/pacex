const mongoose = require("mongoose");
const VideoModel = require("../models/VideoModel");

const getAllVideos = async (req, res) => {
  const videos = await VideoModel.find({}).select("-_id");
  try {
    return res
      .status(200)
      .json({ status: "success", message: "hello from videos", data: videos });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const getVideo = async (req, res) => {
  const { id } = req.params;
  const video = await VideoModel.find({ id }).select("-_id");
  try {
    return res
      .status(200)
      .json({ status: "success", message: "hello from videos", data: video });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllVideos,
  getVideo,
};

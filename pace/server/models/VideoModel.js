const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const VideoModel = mongoose.model("Video", VideoSchema);

module.exports = VideoModel;

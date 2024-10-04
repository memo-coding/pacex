const mongoose = require("mongoose");

const FavouriteSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  isFavourite: {
    type: String,
    default: false,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const FavouriteModel = mongoose.model("Favourite", FavouriteSchema);

module.exports = FavouriteModel;

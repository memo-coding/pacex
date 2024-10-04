const mongoose = require("mongoose");
const FavouriteModel = require("../models/FavouriteModel");

const getAllFavourites = async (req, res) => {
  const favourites = await FavouriteModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from favourites",
      data: favourites,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const addFavourite = async (req, res) => {
  const { url, title, isFavourite } = req.body;

  if (!url || !title) {
    return res
      .status(400)
      .json({ status: "error", message: "Missing required fields" });
  }

  try {
    const newFavourite = new FavouriteModel({
      url,
      title,
      isFavourite,
    });

    await newFavourite.save();

    return res.status(201).json({ status: "success", data: newFavourite });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllFavourites,
  addFavourite,
};

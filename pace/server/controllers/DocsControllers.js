const mongoose = require("mongoose");
const DocsModel = require("../models/DocsModel");

const getAllDocs = async (req, res) => {
  const docs = await DocsModel.find({}).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from docs",
      data: docs,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const getDoc = async (req, res) => {
  const { id } = req.params;
  const doc = await DocsModel.find({ id }).select("-_id");
  try {
    return res.status(200).json({
      status: "success",
      message: "hello from docs",
      data: doc,
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = {
  getAllDocs,
  getDoc,
};

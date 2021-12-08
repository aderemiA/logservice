const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recentActivitySchema = new Schema({
  authorName: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
});

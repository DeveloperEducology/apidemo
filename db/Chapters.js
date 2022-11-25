const mongoose = require("mongoose");

const chaptersSchema = new mongoose.Schema({
  title: { type: String },

  classIds: Array,
  type: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("chapterss", chaptersSchema);

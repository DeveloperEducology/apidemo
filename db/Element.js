const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema({
  question: { type: String },
  
  options: Array,
  type: {
    type: String,
  },
  correct_answer: Array,
  type: {
    type: String,
  },
  chapterIds: Array,
  type: {
    type: String,
  },
  date: { type: Date, default: Date.now },

});

module.exports = mongoose.model("elements", elementSchema);

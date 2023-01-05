const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema({
  unitIds: Array,
  type: {
    type: String,
  },
  title: {
    type: String
  },
  question: Array,
  type:{ type: String },
  
  options: Array,
  type: {
    type: String,
  },
  correct_answer: Array,
  type: {
    type: String,
  },
  blank_answer: {
    type: String,
  },
  explanation: Array,
  type: {
    type: String
  },
  difficuly: {
    type: String
  },
  question_type: {
    type: String
  },
  date: { type: Date, default: Date.now },

});

module.exports = mongoose.model("elements", elementSchema);

const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  title: { type: String },
 
  categoryIds:  Array,
  type: {
    type: String,
  },
  date: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model("chapters", chapterSchema);
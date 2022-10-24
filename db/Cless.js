const mongoose = require("mongoose");

const clessSchema = new mongoose.Schema({
 title: { type: String },
 
  date: { type: Date, default: Date.now },

});

module.exports = mongoose.model("clesses", clessSchema);

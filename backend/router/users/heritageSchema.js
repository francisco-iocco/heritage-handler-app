const mongoose = require("mongoose");

const heritageSchema = mongoose.Schema({
  amount: Number
});

const Heritage = mongoose.model("heritages", heritageSchema);

module.exports = Heritage;
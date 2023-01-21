const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema({
  description: String,
  amount: Number,
  isPermanent: Boolean,
  time: String
});

const Income = mongoose.model("incomes", incomeSchema);

module.exports = Income;
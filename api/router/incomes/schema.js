const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema({
  description: String,
  amount: Number,
  isPermanent: Boolean,
  time: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Income = mongoose.model("incomes", incomeSchema);

module.exports = Income;
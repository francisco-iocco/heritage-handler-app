const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema({
  description: String,
  amount: Number,
  isPermanent: Boolean,
  time: String,
  user_id: {
    type: "ObjectId",
    ref: "users"
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Income = mongoose.model("incomes", incomeSchema);

module.exports = Income;
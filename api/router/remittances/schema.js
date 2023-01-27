const mongoose = require("mongoose");

const remittanceSchema = mongoose.Schema({
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

const Remittance = mongoose.model("remittances", remittanceSchema);

module.exports = Remittance;
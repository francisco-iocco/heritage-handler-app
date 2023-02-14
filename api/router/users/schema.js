const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  heritage: { type: "ObjectId", ref: "heritages" },
  linkRequests: [ { type: "ObjectId", ref: "users" } ],
  linkedAccounts: [ { type: "ObjectId", ref: "users" } ],
  lastConnection: Date
});

const User = mongoose.model("users", userSchema);

module.exports = User;

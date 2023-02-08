const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  heritage: {
    type: "ObjectId",
    ref: "heritages"
  },
  lastConnection: Date
});

const User = mongoose.model("users", userSchema);

module.exports = User;

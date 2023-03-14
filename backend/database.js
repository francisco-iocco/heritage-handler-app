const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

async function connect() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to the database succesfully!"); 
  } catch (error) {
    console.log(error); 
  }
}

module.exports = connect;
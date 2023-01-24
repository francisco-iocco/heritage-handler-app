require("dotenv").config();
const mongoose = require("mongoose");
const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

async function connect() {
  try {
    await mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@heritage-handler-app-db.9jfjzlo.mongodb.net/database`);
    console.log("Connected to the database succesfully!"); 
  } catch (error) {
    console.log("Couldn't connect to the database..."); 
  }
}

module.exports = connect;
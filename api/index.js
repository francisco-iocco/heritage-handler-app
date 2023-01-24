const express = require("express");
const app = express();
const router = require("./router");
const connect = require("./database");
const PORT = process.env.PORT || 4000;

// This is just a extremely basic test.
// The aim is just to set up an API and do a few fetches at first.

connect();

app.use(express.urlencoded());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});
app.use(router);


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}!`);
});
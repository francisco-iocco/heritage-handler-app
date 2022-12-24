const express = require("express");
const app = express();
const PORT = 4000;

// This is just a extremely basic test. We will use MongoDB and JWT later.
// The aim is just to set up an API and do a few fetches at first.

app.use(express.urlencoded());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

const users = [
  {
    email: "franciscoiocco6@gmail.com",
    password: "francisc02006"
  }
];

app.get("/", (req, res) => {
  const { query: { email, password } } = req;

  const isLogged = users.some(user => {
    return user.email === email && user.password === password ? true : false;
  });

  if(!isLogged) {
    res.status(400).json({ msg: "User isn't logged" });
  }

  res.status(200).json({ msg: "Welcome!" });
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}!`);
});
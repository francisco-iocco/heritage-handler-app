const express = require("express");
const app = express();
const { connect, User } = require("./database");
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

app.get("/", async (req, res) => {
  const { query: { email, password } } = req;

  const emailExists = await User.find({ email });
  const users = await User.find({ email, password });

  if(!emailExists.length) {
    return res.status(400).json({
      emailError: true,
      errorMessage: "User doesn't exist..." 
    });
  }

  const isLogged = users.some(user => {
    return user.email === email && user.password === password ? true : false;
  });

  if(!isLogged) {
    return res.status(400).json({
      passwordError: true,
      errorMessage: "Password is incorrect..."
    });
  }
  
  res.status(200).json({ token: users[0]._id });
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}!`);
});
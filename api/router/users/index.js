const { Router } = require("express");
const User = require("./schema");

const router = Router();

router.get("/", async (req, res) => {
  const {
    query: { email, password },
  } = req;

  const emailExists = await User.find({ email });
  const users = await User.find({ email, password });

  if (!emailExists.length) {
    return res.status(400).json({
      emailError: true,
      errorMessage: "User doesn't exist...",
    });
  }

  const isLogged = users.some((user) => {
    return user.email === email && user.password === password ? true : false;
  });

  if (!isLogged) {
    return res.status(400).json({
      passwordError: true,
      errorMessage: "Password is incorrect...",
    });
  }

  res.status(200).json({ token: users[0]._id });
});

module.exports = router;

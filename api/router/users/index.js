const { Router } = require("express");
const User = require("./schema");

const router = Router();

router.get("/:id", async (req, res) => {
  const {
    query: { email, password },
  } = req;

  const isLogged = await User.find({ email });
  
  if (isLogged.length === 0) {
    return res.status(400).json({
      emailError: true,
      errorMessage: "User doesn't exist...",
    });
  }

  const users = await User.find({ email, password });

  if (users.length === 0) {
    return res.status(400).json({
      passwordError: true,
      errorMessage: "Password is incorrect...",
    });
  }

  res.status(200).json({ token: users[0]._id, heritage: users[0].heritage });
});

router.put("/:id", async (req, res) => {
  const { body: { lastConnection }, params: { id } } = req;

  await User.findByIdAndUpdate(id, { lastConnection });
  res.status(200).send();
})

module.exports = router;

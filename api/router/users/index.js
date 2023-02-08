const { Router } = require("express");
const User = require("./schema");
const Heritage = require("../heritage/schema")

const router = Router();

router.get("/", async (req, res) => {
  const {
    query: { email, password },
  } = req;

  const isLogged = await User.findOne({ email });
  
  if (!isLogged) {
    return res.status(400).json({
      emailError: true,
      errorMessage: "User isn't logged...",
    });
  }

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(400).json({
      passwordError: true,
      errorMessage: "Password is incorrect...",
    });
  }

  res.status(200).json({ JWT: user._id });
});

router.post("/", async (req, res) => {
  const { body } = req;

  const heritage = await Heritage({ amount: body.heritage });
  heritage.save();

  const user = await User({ 
    ...body, 
    heritage: heritage._id, 
    lastConnection: new Date() 
  });
  user.save();

  res.status(201).json({ JWT: user._id });
});

router.put("/:id", async (req, res) => {
  const { body: { lastConnection }, params: { id } } = req;

  await User.findByIdAndUpdate(id, { lastConnection });
  res.status(200).send();
})

module.exports = router;

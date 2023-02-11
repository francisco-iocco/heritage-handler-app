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
      errors: {
        emailError: "User isn't logged..."
      }
    });
  }

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(400).json({
      errors: {
        passwordError: "Password is incorrect..."
      }
    });
  }

  res.status(200).json({ userId: user._id });
});

router.get("/:myId", async (req, res) => {
  const { myId } = req.params;
  const myUser = await User.findById(myId)
    .populate("linkedAccounts")
    .populate("linkRequests")
    .populate("heritage");

  const { _doc: { password, ...data } } = myUser;

  res.status(200).send(data);
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

  res.status(201).json({ userId: user._id });
});

router.put("/:myId", async (req, res) => {
  const { body, params: { myId } } = req;
  const data = {};

  if(body.emailToBeLinked) {
    const userToBeLinked = 
      body.emailToBeLinked && await User.findOne({ email: body.emailToBeLinked });
    
    if (!userToBeLinked) {
      return res.status(400).json({
        emailError: true,
        errorMessage: "User doesn't exist...",
      });
    }

    await User.findByIdAndUpdate(userToBeLinked._id, { linkRequests: [...userToBeLinked.linkRequests, myId ]});
  }

  if(body.linkedUserResponse) {
    const myUser = await User.findById(myId);
    const anotherUser = await User.findById(body.linkedUserResponse.id);

    data.linkRequests = myUser.linkRequests.filter((linkRequest) => {
      return linkRequest != body.linkedUserResponse.id;
    });

    if(body.linkedUserResponse.accepted) {
      data.linkedAccounts = [ body.linkedUserResponse.id, ...myUser.linkedAccounts ];
      await User.findByIdAndUpdate(
        body.linkedUserResponse.id, 
        { linkedAccounts: [ myId, ...anotherUser.linkedAccounts ] }
      );
    }
  }

  if(body.lastConnection) data.lastConnection = body.lastConnection;

  await User.findByIdAndUpdate(myId, data);

  res.status(200).send();
})

module.exports = router;

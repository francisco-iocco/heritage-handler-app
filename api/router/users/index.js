const { Router } = require("express");
const User = require("./schema");
const Heritage = require("../heritage/schema");

const router = Router();

router.get("/", async (req, res) => {
  const { email, password } = req.query;

  const isLogged = await User.findOne({ email });
  if (!isLogged) {
    return res.status(400).json({
      errors: { emailError: "User isn't logged..." }
    });
  }

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(400).json({
      errors: { passwordError: "Password is incorrect..." }
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
  
  // Changing each user's last connection date for how much time he/she has been offline.
  const currentDate = new Date().getTime();
  data.linkedAccounts = data.linkedAccounts.map(linkedAccount => {
    
    let months = parseInt(((currentDate - linkedAccount.lastConnection) / 2629800000).toFixed(0));
    let days = parseInt(((currentDate - linkedAccount.lastConnection) / 86400000).toFixed(0));
    let hours = parseInt(((currentDate - linkedAccount.lastConnection) / 3600000).toFixed(0));
    let minutes = parseInt(((currentDate - linkedAccount.lastConnection) / 60000).toFixed(0));

    let lastConnection = [];
    
    if(months) {
      lastConnection.push(months === 1 ? `${months} month` : `${months} months`);
      days = parseInt(((currentDate - months * 2629800000 - linkedAccount.lastConnection) / 86400000).toFixed(0));
    }
    
    if(days) {
      lastConnection.push(days === 1 ? `${days} day` : `${days} days`);
      hours = parseInt(((currentDate - days * 86400000 - linkedAccount.lastConnection) / 3600000).toFixed(0));
      if(months) {
        hours = 0;
        minutes = 0;
      }
    }
    
    if(hours) {
      lastConnection.push(hours === 1 ? `${hours} hour` : `${hours} hours`);
      minutes = parseInt(((currentDate - hours * 3600000 - linkedAccount.lastConnection) / 60000).toFixed(0));
      if(days) minutes = 0;
    }
    
    if(minutes) {
      lastConnection.push(minutes === 1 ? `${minutes} minute` : `${minutes} minutes`);
    }
    
    lastConnection = lastConnection.length > 1
      ? lastConnection.join(" and ")
      : lastConnection.join("");
    
    lastConnection += " ago";
    
    if(!months && !days && !hours && !minutes) lastConnection = "Recently";

    return { ...linkedAccount._doc, lastConnection };
  });

  res.status(200).send(data);
});

router.post("/", async (req, res) => {
  const { body } = req;
  const data = { lastConnection: new Date(), linkedRequests: [] };

  if(body.email) data.email = body.email;

  if(body.password) data.password = body.password;
  
  if(body.heritage) {
    const heritage = await Heritage({ amount: body.heritage });
    heritage.save();
    data.heritage = heritage._id;
  }

  if(body.idToBeLinked) {
    const userToBeLinked = await User.findById(body.idToBeLinked);
    if(userToBeLinked) data.linkedAccounts = [ body.idToBeLinked ];
  }

  const newUser = await User(data);
  newUser.save();

  if(body.idToBeLinked) {
    const userToBeLinked = await User.findById(body.idToBeLinked);
    await User.findByIdAndUpdate(
      userToBeLinked._id,
      { linkedAccounts: [ ...userToBeLinked.linkedAccounts, newUser._id ]}
    );
  }
  
  res.status(201).json({ userId: body.idToBeLinked ? body.idToBeLinked : newUser._id });
});

router.put("/:myId", async (req, res) => {
  const { body, params: { myId } } = req;
  const data = {};

  if(body.email) data.email = body.email;
  if(body.password) data.password = body.password;
  if(body.lastConnection) data.lastConnection = body.lastConnection;

  if(body.emailToBeLinked) {
    const userToBeLinked = await User.findOne({ email: body.emailToBeLinked }); 
    if (!userToBeLinked) {
      return res.status(400).json({
        errors: { emailError: "User doesn't exist..." }
      });
    }
    await User.findByIdAndUpdate(userToBeLinked._id, { linkRequests: [...userToBeLinked.linkRequests, myId ]});
  }

  if(body.idToBeUnlinked) {
    const myUser = await User.findById(myId);
    const anotherUser = await User.findById(body.idToBeUnlinked);
    data.linkedAccounts = myUser.linkedAccounts.filter(linkedAccount => 
      linkedAccount._id != body.idToBeUnlinked
    );
    const anotherUserLinkedAccounts = anotherUser.linkedAccounts.filter(linkedAccount => 
      linkedAccount._id != myId
    );
    await User.findByIdAndUpdate(body.idToBeUnlinked, { linkedAccounts: anotherUserLinkedAccounts });
  }

  if(body.linkUserResponse) {
    const myUser = await User.findById(myId);
    const anotherUser = await User.findById(body.linkUserResponse.id);

    data.linkRequests = myUser.linkRequests.filter((linkRequest) => {
      return linkRequest != body.linkUserResponse.id;
    });

    if(body.linkUserResponse.accepted) {
      data.linkedAccounts = [ ...myUser.linkedAccounts, body.linkUserResponse.id ];
      await User.findByIdAndUpdate(
        body.linkUserResponse.id, 
        { linkedAccounts: [ ...anotherUser.linkedAccounts, myId ] }
      );
    }
  }

  await User.findByIdAndUpdate(myId, data);

  res.status(200).send();
});

module.exports = router;

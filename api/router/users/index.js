const { Router } = require("express");
const User = require("./schema");
const Heritage = require("../heritage/schema");

const router = Router();

router.get("/", async (req, res) => {
  const { email, password } = req.query;

  // Checking inputs

  if(!email) return res.status(400).send({
    errors: { email: "Email is required..." },
  });

  if(!password) return res.status(400).send({
    errors: { password: "Password is required..." },
  });

  // Checking if the user isn't logged.
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({
      errors: { email: "User isn't logged..." },
    });
  }

  // Checking if the password is incorrect.
  if(user.password != password) return res.status(404).send({
    errors: { password: "Password is incorrect..." },
  });

  res.status(200).send({ userId: user._id });
})

router.get("/:myId", async (req, res) => {
  const { myId } = req.params;
  const myUser = await User.findById(myId)
    .populate("linkedAccounts")
    .populate("linkRequests")
    .populate("heritage");

  if(!myUser) return res.status(400).send({
    error: { id: "Id didn't match any user..." }
  });

  const userData = myUser._doc;

  // Changing each linked user's last connection date for how much time he/she has been offline.
  const currentDate = new Date().getTime();
  userData.linkedAccounts = userData.linkedAccounts.map((linkedAccount) => {
    let months = parseInt(
      ((currentDate - linkedAccount.lastConnection) / 2629800000).toFixed(0)
    );
    let days = parseInt(
      ((currentDate - linkedAccount.lastConnection) / 86400000).toFixed(0)
    );
    let hours = parseInt(
      ((currentDate - linkedAccount.lastConnection) / 3600000).toFixed(0)
    );
    let minutes = parseInt(
      ((currentDate - linkedAccount.lastConnection) / 60000).toFixed(0)
    );

    let lastConnection = [];

    if (months) {
      lastConnection.push(
        months === 1 ? `${months} month` : `${months} months`
      );
      days = parseInt(
        (
          (currentDate - months * 2629800000 - linkedAccount.lastConnection) /
          86400000
        ).toFixed(0)
      );
    }

    if (days) {
      lastConnection.push(days === 1 ? `${days} day` : `${days} days`);
      hours = parseInt(
        (
          (currentDate - days * 86400000 - linkedAccount.lastConnection) /
          3600000
        ).toFixed(0)
      );
      if (months) {
        hours = 0;
        minutes = 0;
      }
    }

    if (hours) {
      lastConnection.push(hours === 1 ? `${hours} hour` : `${hours} hours`);
      minutes = parseInt(
        (
          (currentDate - hours * 3600000 - linkedAccount.lastConnection) /
          60000
        ).toFixed(0)
      );
      if (days) minutes = 0;
    }

    if (minutes) {
      lastConnection.push(
        minutes === 1 ? `${minutes} minute` : `${minutes} minutes`
      );
    }

    lastConnection =
      lastConnection.length > 1
        ? lastConnection.join(" and ")
        : lastConnection.join("");

    lastConnection += " ago";

    if (!months && !days && !hours && !minutes) lastConnection = "Recently";

    return { ...linkedAccount._doc, lastConnection };
  });

  res.status(200).send(userData);
});

router.post("/", async (req, res) => {
  const { body } = req;
  const userData = { lastConnection: new Date(), linkedRequests: [] };

  // Checking email possible errors.
  if(!body.email) return res.status(400).send({
    errors: { email: "Email is required..." },
  });
  if(body.email.length < 6) return res.status(400).send({
    errors: { email: "Email is too short..." },
  });
  userData.email = body.email;

  // 400 status code in case the user already exists.
  const userAlreadyExists = await User.findOne({ email: body.email });
  if(userAlreadyExists) return res.status(400).send({
    errors: { email: "User already exists..." },
  });

  // Checking password possible errors.
  if(!body.password) return res.status(400).send({
    errors: { password: "Password is required..." },
  });
  if(body.password.length < 6) return res.status(400).send({
    errors: { password: "Password is too short..." },
  });
  userData.password = body.password;
  
  // Checking heritage possible errors. (and creating it if there aren't any)
  if(!body.heritage) return res.status(400).send({
    errors: { heritage: "Heritage is required..." },
  });
  const heritage = await Heritage({ amount: body.heritage });
  heritage.save();
  userData.heritage = heritage._id;

  // idToBeLinked to link another user to my account. (if it exists)
  if (body.idToBeLinked) {
    const userToBeLinked = await User.findById(body.idToBeLinked);
    if (userToBeLinked) userData.linkedAccounts = [body.idToBeLinked];
  }

  const newUser = await User(userData);
  newUser.save();

  // idToBeLinked to link my own account to another one. (if it exists)
  if (body.idToBeLinked) {
    const userToBeLinked = await User.findById(body.idToBeLinked);
    await User.findByIdAndUpdate(userToBeLinked._id, {
      linkedAccounts: [...userToBeLinked.linkedAccounts, newUser._id],
    });
  }

  res
    .status(201)
    .send({ userId: body.idToBeLinked ? body.idToBeLinked : newUser._id });
});

router.put("/:myId", async (req, res) => {
  const { body, params: { myId } } = req;
  const userData = {};

  const myUser = await User.findById(myId);

  if(!myUser) return res.status(400).send({
    errors: { id: "Id didn't match any user..." },
  });

  if (body.email) {
    const userAlreadyExists = await User.findOne({ email: body.email });
    if(userAlreadyExists) return res.status(400).send({
      errors: { email: "User already exists..." },
    });
    if(body.email.length < 6) return res.status(400).send({
      errors: { email: "Email is too short..." },
    });
    // userData.email assignment in case there weren't any exceptions.
    userData.email = body.email;
  }
  if (body.password) {
    if(body.password.length < 6) return res.status(400).send({
      errors: { password: "Password is too short..." },
    });
    // userData.password assignment in case there weren't any exceptions.
    userData.password = body.password;
  }
  if (body.lastConnection) userData.lastConnection = body.lastConnection;

  if (body.emailToBeLinked) {
    const userToBeLinked = await User.findOne({ email: body.emailToBeLinked });
    if (!userToBeLinked) return res.status(400).send({
      errors: { email: "User doesn't exist..." },
    });
    await User.findByIdAndUpdate(userToBeLinked._id, {
      linkRequests: [...userToBeLinked.linkRequests, myId],
    });
  }

  // Unlink users logic.
  if (body.idToBeUnlinked) {
    const anotherUser = await User.findById(body.idToBeUnlinked);
    if(!anotherUser) return res.status(400).send({
      errors: { link: "User to unlink wasn`t found..." },
    });

    userData.linkedAccounts = myUser.linkedAccounts.filter(
      (linkedAccount) => linkedAccount._id != body.idToBeUnlinked
    );
    const anotherUserLinkedAccounts = anotherUser.linkedAccounts.filter(
      (linkedAccount) => linkedAccount._id != myId
    );
    await User.findByIdAndUpdate(body.idToBeUnlinked, {
      linkedAccounts: anotherUserLinkedAccounts,
    });
  }

  // Link users logic. (through 'link requests')
  if (body.linkUserResponse) {
    const anotherUser = await User.findById(body.linkUserResponse.id);
    if(!anotherUser) return res.status(400).send({
      errors: { link: "User's response to link wasn`t found..." },
    });
    
    userData.linkRequests = myUser.linkRequests.filter((linkRequest) => {
      return linkRequest != body.linkUserResponse.id;
    });

    if (body.linkUserResponse.accepted) {
      userData.linkedAccounts = [
        ...myUser.linkedAccounts,
        body.linkUserResponse.id,
      ];
      await User.findByIdAndUpdate(body.linkUserResponse.id, {
        linkedAccounts: [...anotherUser.linkedAccounts, myId],
      });
    }
  }

  await User.findByIdAndUpdate(myId, userData);

  res.status(201).send({});
});

router.delete("/:myId", async (req, res) => {
  const { myId } = req.params;
  const myDeletedUser = await User.findByIdAndDelete(myId);
  if(!myDeletedUser) return res.status(400).send({
    errors: { id: "Id didn't match any user..." }
  })

  // Remove my account from the other users' list of linked accounts.
  myDeletedUser.linkedAccounts.forEach(async (linkedAccount) => {
    const anotherUser = await User.findById(linkedAccount._id);
    const newLinkedAccounts = anotherUser.linkedAccounts.filter(
      (linkedAccount) => linkedAccount._id != myId
    );
    await User.findByIdAndUpdate(linkedAccount._id, {
      linkedAccounts: newLinkedAccounts,
    });
  });
  
  res.status(204).send();
});

module.exports = router;

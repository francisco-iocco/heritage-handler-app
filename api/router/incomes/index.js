const { Router } = require("express");
const Income = require("./schema");
const Heritage = require("../heritage/schema");

const router = Router();

function preparePermanentProperties(data, user_id) {
  const configuredData = data.isPermanent ? {
    ...data,
    user_id,
    lastAdd: new Date()
  } : { 
    ...data,
    user_id
  };

  if(data.lastAdd) {
    switch (data.time) {
      case "per year":
        data.lastAdd.setMonth(0);
      case "per month":
        data.lastAdd.setDate(1);
      case "per day":
        data.lastAdd.setHours(00, 00, 00);
        break;
      default:
        break;
    }
  }

  return configuredData;
}

router.post("/:user_id/incomes", async (req, res) => {
  const {
    body,
    params: { user_id },
  } = req;

  const data = preparePermanentProperties(body, user_id);
  const newIncome = new Income(data);
  newIncome.save();

  if(!data.isPermanent) {
    const outdatedHeritage = await Heritage.findOne({ user_id });
    const newAmount = outdatedHeritage.amount + data.amount;
    await Heritage.findByIdAndUpdate(outdatedHeritage._id, { amount: newAmount });
  }

  res.status(201).send();
});

router.get("/:user_id/incomes", async (req, res) => {
  const { user_id } = req.params;
  const incomes = await Income.find({ user_id });
  res.status(200).json(incomes);
});

router.put("/:user_id/incomes/:id", async (req, res) => {
  const {
    body,
    params: { id, user_id },
  } = req;

  const oldIncome = await Income.findByIdAndUpdate(id, body);

  const data = preparePermanentProperties(body, user_id);

  const outdatedHeritage = await Heritage.findOne({ user_id });
  
  let newAmount;
  if(!data.isPermanent) {
    newAmount = oldIncome.lastAdd 
     ? outdatedHeritage.amount + body.amount
     : outdatedHeritage.amount - oldIncome.amount + body.amount;
  } else {
    newAmount = outdatedHeritage.amount - oldIncome.amount;
  }
  await Heritage.findByIdAndUpdate(outdatedHeritage._id, { amount: newAmount });

  res.status(200).send();
});

router.delete("/:user_id/incomes/:id", async (req, res) => {
  const { id, user_id } = req.params;

  const oldIncome = await Income.findByIdAndDelete(id);

  if(!oldIncome.isPermanent) {
    const outdatedHeritage = await Heritage.findOne({ user_id });
    const newAmount = outdatedHeritage.amount - oldIncome.amount;
    await Heritage.findByIdAndUpdate(outdatedHeritage._id, { amount: newAmount });
  }

  res.status(204).send();
});

module.exports = router;

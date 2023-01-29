const { Router } = require("express");
const Income = require("./schema");
const Heritage = require("../heritage/schema");

const router = Router();

router.post("/:user_id/incomes", async (req, res) => {
  const { body, params: { user_id } } = req;
  const [ outdatedHeritage ] = await Heritage.find({ user_id });
  const newAmount = outdatedHeritage.amount + body.amount;
  await Heritage.findOneAndUpdate(outdatedHeritage._id, { amount: newAmount });

  const data = { ...body, user_id };
  const newIncome = new Income(data);
  newIncome.save();
  res.status(201).send();
});

router.get("/:user_id/incomes", async (req, res) => {
  const { user_id } = req.params;
  const incomes = await Income.find({ user_id });
  res.status(200).json(incomes);
});

router.put("/:user_id/incomes/:id", async (req, res) => {
  const { body, params: { id, user_id } } = req;
  const income = await Income.findOneAndUpdate(id, body);
  const oldIncomeAmount = income.amount;
  const [ outdatedHeritage ] = await Heritage.find({ user_id });
  const newAmount = outdatedHeritage.amount - oldIncomeAmount + body.amount;
  await Heritage.findOneAndUpdate(outdatedHeritage._id, { amount: newAmount });

  res.status(200).send();
})

router.delete("/:user_id/incomes/:id", async (req, res) => {
  const { id, user_id } = req.params;

  const income = await Income.findById(id);
  await Income.findByIdAndDelete(id)
  const oldIncomeAmount = income.amount;
  const [ outdatedHeritage ] = await Heritage.find({ user_id });
  const newAmount = outdatedHeritage.amount - oldIncomeAmount;
  await Heritage.findOneAndUpdate(outdatedHeritage._id, { amount: newAmount });

  res.status(204).send();
});

module.exports = router;
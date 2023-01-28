const { Router } = require("express");
const Income = require("./schema");

const router = Router();

router.post("/:user_id/incomes", (req, res) => {
  const { body, params: { user_id } } = req;
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
  const { body, params: { id } } = req;
  Income.findByIdAndUpdate(id, body, (err, doc) => {
    err ? console.error(err) : console.log(doc);
  });
  res.status(200).send();
})

router.delete("/:user_id/incomes/:id", async (req, res) => {
  const { id } = req.params;
  Income.findByIdAndDelete(id, (err, doc) => {
    err ? console.log(err) : console.log(doc);
  });
  res.status(204).send();
});

module.exports = router;
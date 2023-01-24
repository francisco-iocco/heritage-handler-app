const { Router } = require("express");
const Income = require("./schema");

const router = Router();

router.post("/", (req, res) => {
  const { body } = req;
  const newIncome = new Income(body);
  newIncome.save();
  res.status(201).send();
});

router.get("/", async (req, res) => {
  const incomes = await Income.find();
  res.status(200).json(incomes);
});

router.put("/:id", async (req, res) => {
  const { body, params: { id } } = req;
  Income.findByIdAndUpdate(id, body, (err, doc) => {
    err ? console.error(err) : console.log(doc);
  });
  res.status(200).send();
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  Income.findByIdAndDelete(id, (err, doc) => {
    err ? console.log(err) : console.log(doc);
  });
  res.status(204).send();
});

module.exports = router;
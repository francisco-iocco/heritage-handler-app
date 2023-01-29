const { Router } = require("express");
const Remittance = require("./schema");
const Heritage = require("../heritage/schema");

const router = Router();

router.post("/:user_id/remittances", async (req, res) => {
  const { body, params: { user_id } } = req;

  const [ outdatedHeritage ] = await Heritage.find({ user_id });
  const newAmount = outdatedHeritage.amount + body.amount;
  await Heritage.findOneAndUpdate(outdatedHeritage._id, { amount: newAmount });

  const data = { ...body, user_id };
  const newRemittance = new Remittance(data);
  newRemittance.save();
  res.status(201).send();
});

router.get("/:user_id/remittances", async (req, res) => {
  const { user_id } = req.params;
  const remittances = await Remittance.find({ user_id });
  res.status(200).json(remittances);
});

router.put("/:user_id/remittances/:id", async (req, res) => {
  const { body, params: { id, user_id } } = req;

  const remittance = await Remittance.findOneAndUpdate(id, body);
  const oldRemittanceAmount = remittance.amount;
  const [ outdatedHeritage ] = await Heritage.find({ user_id });
  const newAmount = outdatedHeritage.amount - oldRemittanceAmount + body.amount;
  await Heritage.findOneAndUpdate(outdatedHeritage._id, { amount: newAmount });

  res.status(200).send();
})

router.delete("/:user_id/remittances/:id", async (req, res) => {
  const { id, user_id } = req.params;

  const remittance = await Remittance.findById(id);
  await Remittance.findByIdAndDelete(id);
  const oldRemittanceAmount = remittance.amount;
  const [ outdatedHeritage ] = await Heritage.find({ user_id });
  const newAmount = outdatedHeritage.amount - oldRemittanceAmount;
  await Heritage.findOneAndUpdate(outdatedHeritage._id, { amount: newAmount });
  
  res.status(204).send();
});

module.exports = router;
const { Router } = require("express");
const Remittance = require("./schema");
const Heritage = require("../heritages/schema");

const router = Router();

router.post("/:user_id/remittances", async (req, res) => {
  const { body, params: { user_id } } = req;

  const [ outdatedHeritage ] = await Heritage.find({ user_id });
  const amount = outdatedHeritage.amount + body.amount;
  Heritage.findByIdAndUpdate(outdatedHeritage._id, { amount }, (err, doc) => {
    err ? console.error(err) : console.log(doc);
  });

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
  Heritage.findByIdAndUpdate(outdatedHeritage._id, { amount: newAmount }, (err, doc) => {
    err ? console.error(err) : console.log(doc);
  });

  res.status(200).send();
})

router.delete("/:user_id/remittances/:id", async (req, res) => {
  const { id, user_id } = req.params;

  const remittance = await Remittance.findOneAndDelete(id);
  const oldRemittanceAmount = remittance.amount;
  const [ outdatedHeritage ] = await Heritage.find({ user_id });
  const newAmount = outdatedHeritage.amount - oldRemittanceAmount;
  Heritage.findByIdAndUpdate(outdatedHeritage._id, { amount: newAmount }, (err, doc) => {
    err ? console.error(err) : console.log(doc);
  });
  
  res.status(204).send();
});

module.exports = router;
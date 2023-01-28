const { Router } = require("express");
const Remittance = require("./schema");

const router = Router();

router.post("/:user_id/remittances", (req, res) => {
  const { body, params: { user_id } } = req;
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
  const { body, params: { id } } = req;
  Remittance.findByIdAndUpdate(id, body, (err, doc) => {
    err ? console.error(err) : console.log(doc);
  });
  res.status(200).send();
})

router.delete("/:user_id/remittances/:id", async (req, res) => {
  const { id } = req.params;
  Remittance.findByIdAndDelete(id, (err, doc) => {
    err ? console.log(err) : console.log(doc);
  });
  res.status(204).send();
});

module.exports = router;
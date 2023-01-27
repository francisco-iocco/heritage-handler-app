const { Router } = require("express");
const Remittance = require("./schema");

const router = Router();

router.post("/", (req, res) => {
  const { body } = req;
  const newRemittance = new Remittance(body);
  newRemittance.save();
  res.status(201).send();
});

router.get("/", async (req, res) => {
  const Remittances = await Remittance.find();
  res.status(200).json(Remittances);
});

router.put("/:id", async (req, res) => {
  const { body, params: { id } } = req;
  Remittance.findByIdAndUpdate(id, body, (err, doc) => {
    err ? console.error(err) : console.log(doc);
  });
  res.status(200).send();
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  Remittance.findByIdAndDelete(id, (err, doc) => {
    err ? console.log(err) : console.log(doc);
  });
  res.status(204).send();
});

module.exports = router;
const { Router } = require("express");
const Heritage = require("./schema");

const router = Router();

router.get("/:user_id/heritages", async (req, res) => {
  const { user_id } = req.params;
  const heritages = await Heritage.find({ user_id });
  res.status(200).json(heritages[0]);
});

module.exports = router;
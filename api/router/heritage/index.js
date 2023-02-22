const { Router } = require("express");
const Heritage = require("./schema");
const User = require("../users/schema");
const Income = require("../incomes/schema");
const Remittance = require("../remittances/schema");

const router = Router();

async function sumPermanents(results) {

  const permanents = results.filter((result) => result.isPermanent);

  let amount = 0;
  let updateResult = false;
  permanents.forEach(async (permanent) => {
    const currentDate = new Date();
    const lastAdd = new Date(permanent.lastAdd);
    const difference = Math.floor(((currentDate - lastAdd) / 86400000));

    switch (permanent.time) {
      case "per day":
        if (difference) {
          amount += permanent.amount * difference;
          currentDate.setHours(00, 00, 00);
          updateResult = true;
        }
        break;
      case "per month":
        if (difference >= 30) {
          amount += permanent.amount * Math.floor((difference / 30));
          currentDate.setHours(00, 00, 00);
          currentDate.setDate(1);
          updateResult = true;
        }
        break;
      case "per year":
        if (difference >= 365) {
          amount += permanent.amount * Math.floor((difference / 365));
          currentDate.setHours(00, 00, 00);
          currentDate.setDate(1);
          currentDate.setMonth(0);
          updateResult = true;
        }
        break;
    }

    const updatedLastAdd = new Date(currentDate);

    updateResult && permanent.amount >= 0
      ? await Income.findByIdAndUpdate(permanent._id, { lastAdd: updatedLastAdd })
      : await Remittance.findByIdAndUpdate(permanent._id, { lastAdd: updatedLastAdd });
  });
  return amount;
}

router.get("/:user_id/heritage", async (req, res) => {
  const { user_id } = req.params;

  if(user_id === "undefined") return res.status(400).send({
    errors: { id: "User's id is required..."}
  });

  const incomes = await Income.find({ user_id });
  const remittances = await Remittance.find({ user_id });

  const permanentIncomesAmount = await sumPermanents(incomes, user_id);
  const permanentRemittancesAmount = await sumPermanents(remittances, user_id);

  let { heritage } = await User.findById(user_id);

  heritage = await Heritage.findById(heritage);

  if(permanentIncomesAmount || permanentRemittancesAmount) {
    heritage = await Heritage.findByIdAndUpdate(
      heritage._id, 
      {
        amount: heritage.amount + permanentIncomesAmount + permanentRemittancesAmount,
      },
      { new: true }
    );
  }

  res.status(200).json(heritage);
});

module.exports = router;

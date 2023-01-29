const usersRouter = require("./users");
const incomesRouter = require("./incomes");
const remittancesRouter = require("./remittances");
const heritageRouter = require("./heritage");

const { Router } = require("express");

const router = Router();

router.use("/users", usersRouter);
router.use("/", heritageRouter);
router.use("/", incomesRouter);
router.use("/", remittancesRouter);

module.exports = router;
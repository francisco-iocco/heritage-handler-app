const usersRouter = require("./users");
const incomesRouter = require("./incomes");
const remittancesRouter = require("./remittances");
const heritagesRouter = require("./heritages");

const { Router } = require("express");

const router = Router();

router.use("/users", usersRouter);
router.use("/", heritagesRouter);
router.use("/", incomesRouter);
router.use("/", remittancesRouter);

module.exports = router;
const usersRouter = require("./users");
const incomesRouter = require("./incomes");
const remittancesRouter = require("./remittances");

const { Router } = require("express");

const router = Router();

router.use("/users", usersRouter);
router.use("/incomes", incomesRouter);
router.use("/remittances", remittancesRouter);

module.exports = router;
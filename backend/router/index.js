const usersRouter = require("./users");
const incomesRouter = require("./incomes");
const remittancesRouter = require("./remittances");

const { Router } = require("express");

const router = Router();

router.use("/users", usersRouter);
router.use("/", incomesRouter);
router.use("/", remittancesRouter);

module.exports = router;
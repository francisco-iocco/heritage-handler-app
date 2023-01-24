const usersRouter = require("./users");
const incomesRouter = require("./incomes");
const { Router } = require("express");

const router = Router();

router.use("/users", usersRouter);
router.use("/incomes", incomesRouter);

module.exports = router;
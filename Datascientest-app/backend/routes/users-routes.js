const express = require("express");
const usersControllers = require("./../controllers/users-controllers");
const router = express.Router();

router.post("/sign-in", usersControllers.signIn);
router.post("/login", usersControllers.login);

module.exports = router;

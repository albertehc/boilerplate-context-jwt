const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const authController = require("./../controllers/authController");
const auth = require("./../middleware/auth");

// /api/auth/
router.post("/", authController.login);

router.get("/", auth, authController.me);

module.exports = router;
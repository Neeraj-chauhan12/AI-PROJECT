const express = require("express");
const {
  registerUser,
  LoginUser,
  logoutUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", LoginUser);
router.post("/logout", logoutUser);

module.exports = router;

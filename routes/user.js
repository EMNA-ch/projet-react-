const express = require("express");
const {
  Register,
  Login,
  verifyLogin,
  getVisitedProfile,
} = require("../controllers/user.controller");
const { registerRules, validator } = require("../middlewares/validator");
const { loginRules, validatorLogin } = require("../middlewares/validatorLogin");
const router = express.Router();

router.post("/register", registerRules(), validator, Register);
router.post("/login", loginRules(), validatorLogin, Login);
router.get("/verifylogin", verifyLogin);
// test visited user
router.get("/visitUser/:id", getVisitedProfile);

module.exports = router;

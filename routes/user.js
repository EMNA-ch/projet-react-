const express = require("express");
const {
  Register,
  Login,
  verifyLogin,
  getVisitedProfile,
  updateProfile,
} = require("../controllers/user.controller");
const {
  registerRules,
  validator,
  updateRules,
} = require("../middlewares/validator");
const { loginRules, validatorLogin } = require("../middlewares/validatorLogin");
const verifyAuth = require("../middlewares/verifyAuth");
const router = express.Router();

router.post("/register", registerRules(), validator, Register);
router.post("/login", loginRules(), validatorLogin, Login);
router.get("/verifylogin", verifyLogin);
// test visited user
router.get("/visitUser/:id", getVisitedProfile);
router.put(
  "/userProfile/:id",
  verifyAuth,
  updateRules(),
  validator,
  updateProfile
);

module.exports = router;

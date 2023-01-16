const { check, validationResult } = require("express-validator");

exports.loginRules = () => [
  check("email", "Email requires a valid email").isEmail(),
  check("password", "Password needs to be at least 6 characters").isLength({
    min: 6,
  }),
];

exports.validatorLogin = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};

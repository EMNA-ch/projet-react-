const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("name", "Name is required").notEmpty(),
  check("email", "Email requires a valid email").isEmail(),
  check("password", "Password needs to be at least 6 characters").isLength({
    min: 6,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};

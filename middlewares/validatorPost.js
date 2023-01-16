const { check, validationResult } = require("express-validator");

exports.postRules = () => [
  check("title", "Title is required").notEmpty(),
  check("location", "location is required").notEmpty(),
  check("destination", "destination is required").notEmpty(),
  check("cost", "Cost is required").notEmpty(),
  check("transport", "Transport is required").notEmpty(),
  check("description", "Description is required").notEmpty(),
];

exports.commentRules = () => [check("text", "Text is required").notEmpty()];
exports.validatorPost = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};

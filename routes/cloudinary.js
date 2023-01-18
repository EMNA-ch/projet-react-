const express = require("express");
const {
  uploadImage,
  removeImage,
} = require("../controllers/cloudinary.controller");

const router = express.Router();

router.post("/upload", uploadImage);
router.post("/remove", removeImage);

module.exports = router;

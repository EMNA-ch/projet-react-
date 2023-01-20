const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const secret = config.get("secret");

const verifyAuth = async (req, res, next) => {
  //Get token from header
  const token = req.headers.authorization;
  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "no token" });
  }
  //verify token
  try {
    const payload = await jwt.verify(token, secret);
    const user = await User.findById(payload.id).select("-password");
    // console.log("user", user);
    if (!user) {
      return res.status(400).json({ msg: "unauthorized!" });
    } else {
      req.user = user;
      // console.log(req.user);
      next();
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = verifyAuth;

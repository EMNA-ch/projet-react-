const User = require("../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const secret = config.get("secret");

exports.Register = async (req, res) => {
  const { name, email, password, avatar } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "user already exists!" });
    }

    const user = new User({
      name,
      email,
      avatar,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;
    await user.save();
    const payload = {
      id: user.id,
    };
    const token = await jwt.sign(payload, secret);

    res.send({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
    const payload = {
      id: foundUser.id,
    };
    const token = await jwt.sign(payload, secret);

    res.send({
      token,
      user: {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.verifyLogin = async (req, res) => {
  //Get token from header
  const token = req.headers.authorization;
  // check if not token
  if (!token) {
    return res.status(401).json({ msg: "no token" });
  }
  //verify token
  try {
    const payload = await jwt.verify(token, secret);
    const user = await User.findById(payload.id).select("-password");
    if (!user) {
      return res.status(400).json({ msg: "unauthorized!" });
    } else {
      res.send({
        token,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// visit another user
exports.getVisitedProfile = async (req, res) => {
  try {
    const visitedUser = await User.findById(req.params.id);
    res.send({
      id: visitedUser.id,
      name: visitedUser.name,
      email: visitedUser.email,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

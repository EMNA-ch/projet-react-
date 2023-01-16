const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  userRole: {
    type: String,
    default: "User",
    roles: ["User", "Admin"],
  },
});

module.exports = mongoose.model("User", userSchema);

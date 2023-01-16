const mongoose = require("mongoose");
const config = require("config");
const db = config.get("database");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("database connected...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;

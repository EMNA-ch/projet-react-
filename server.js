const express = require("express");
const connectDB = require("./config/db");
const user = require("./routes/user");

const post = require("./routes/post");
const cloudinary = require("./routes/cloudinary");
const app = express();
app.use(express.json({ extanded: false, limit: "2MB" }));
connectDB();

const PORT = process.env.PORT || 5000;
app.use("/api", user);
app.use("/api/cloudinary", cloudinary);
app.use("/api/post", post);

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);

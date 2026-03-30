const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// DB connect + start server
mongoose.connect(process.env.mongo_url)
.then(() => {
  console.log("✅ DB Connected");

  app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
  });
})
.catch(err => console.log("❌ DB Error:", err.message));
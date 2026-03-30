const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// DB connect + start server
mongoose.connect("mongodb://kishan8114270058_db_user:krishna123@ac-hla54ix-shard-00-00.z3hmwuu.mongodb.net:27017,ac-hla54ix-shard-00-01.z3hmwuu.mongodb.net:27017,ac-hla54ix-shard-00-02.z3hmwuu.mongodb.net:27017/myDB?ssl=true&replicaSet=atlas-11nymg-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
  console.log("✅ DB Connected");

  app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
  });
})
.catch(err => console.log("❌ DB Error:", err));
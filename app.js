const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/api");

const app = express();
app.use(express.json());

const DB_URL = "mongodb://localhost:27017/personal-finance-tracker";

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/api", router);

app.listen(3001, () => {
  console.log(" http://localhost:3001");
});

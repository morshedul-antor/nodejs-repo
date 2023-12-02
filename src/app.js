const mongoose = require("mongoose");
const express = require("express");
const app = express();

const errorResponse = require("./errors/index");
app.use(errorResponse);

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (reg, res) => {
  res.send({ message: "Nodejs Repository Pattern!" });
});

const itemRoutes = require("./routes/itemRoutes");
app.use("/api/v1", itemRoutes);

module.exports = app;

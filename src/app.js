const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

const errorResponse = require("./errors/index");
app.use(errorResponse);

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("DB connection successfull..."))
  .catch((err) => console.log(err));

app.get("/", (reg, res) => {
  res.send({ message: "Nodejs Repository Pattern!" });
});

const itemRoutes = require("./routes/itemRoutes");
app.use("/api/v1", itemRoutes);

module.exports = app;

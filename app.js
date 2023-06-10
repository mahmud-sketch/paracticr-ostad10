const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const mongoose = require("mongoose");

// security middleware

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

app.use(helmet());
app.use(mongoSanitize());
app.use(xssClean());
app.use(hpp());
app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
// console.log("app");
app.use(limiter);

//mongodb connecton
let URI = "mongodb://127.0.0.1:27017/schools";
let OPTION = { user: "", pass: "" };

mongoose
  .connect(URI, OPTION)
  .then((res) => {
    console.log("database success");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/v1", router);

//udefined route
app.use("*", (req, res) => {
  res.status(404).json({ status: "failed", data: "not found" });
});

module.exports = app;

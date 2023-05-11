const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const errorMiddleware = require("./utils/error");
const cors = require("cors");

require("dotenv").config({ path: "config/.env" });

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "POST");
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const contact = require("./routes/contactRoutes");
app.use("/api/v1", contact);

const project = require("./routes/projectRoutes");
app.use("/api/v1/", project);

app.use(errorMiddleware);

module.exports = app;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const errorMiddleware = require("./utils/error");

require("dotenv").config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const contact = require("./routes/contactRoutes");
app.use("/api/v1", contact);

const project = require("./routes/projectRoutes");
app.use("/api/v1/", project);

app.use(errorMiddleware);

module.exports = app;

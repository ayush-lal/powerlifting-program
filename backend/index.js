const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

app.use(cors());
app.use(bodyParser.json());

const postRoutes = require("./routes/program");
app.use("/api", postRoutes);

mongoose.connect(process.env.DB_CONNECTION);

app.listen(process.env.PORT);

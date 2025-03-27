const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST"],
    allowedHeaders: [
      "Content-type",
      "Pragma",
      "Authorization",
      "Cache-control",
      "Expires",
    ],
    credentials: true,
  })
);
console.log("server started");
app.listen(process.env.PORT);

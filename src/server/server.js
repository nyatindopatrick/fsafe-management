const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const db = process.env.DB_KEY;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected sucessfully"))
  .catch(err => console.log(err));

app.use(express.static("dist"));

app.use("/api", require("./routes"));

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

const express = require("express");
const app = express();

const cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/smit9");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
app.use(bodyParser.json());
app.use(cors());

// Routes
const studentRoute = require("./routes/students");
const commentRoute = require("./routes/comment");
const teacherRoute = require("./routes/teacher");

// All Routes
app.use("/student", studentRoute);
app.use("/login", studentRoute);
app.use("/comment", commentRoute);
app.use("/teacher", teacherRoute);

app.listen(5000, () => console.log("Example app listening on port 5000!"));

let express = require("express");
let route = express.Router();

let Student = require("../models/student.modal");

route.get("/", (req, res) => {
  res.send("Please submit form");
});

route.post("/", async (req, res) => {
  console.log("INSERTED");

  const studentData = new Student({
    sname: req.body.sname,
    fname: req.body.fname,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    cnic: req.body.cnic,
    batch: req.body.batch,
    rollno: req.body.rollno,
    address: req.body.address,
    teacher_id: req.body.teacher_id,
  });

  console.log("server: ", studentData);

  try {
    const result = await studentData.save();
    console.log(result); // result
    res.json(result);
  } catch (err) {
    console.error("Error ocured from insert student data: ", err);
  }
});

module.exports = route;

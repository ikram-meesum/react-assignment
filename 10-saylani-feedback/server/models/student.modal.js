let mongoose = require("mongoose");

let studentSchema = mongoose.Schema({
  sname: { type: String, uppercase: true },
  fname: { type: String, uppercase: true },
  email: { type: String, lowercase: false },
  mobile: String,
  cnic: String,  
  batch: String,
  password: String, 
  rollno: String,   
  address: { type: String },

},{ timestamps: true } );

let Student = mongoose.model("student", studentSchema);
module.exports = Student;


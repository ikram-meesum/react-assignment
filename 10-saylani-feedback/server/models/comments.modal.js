let mongoose = require("mongoose");

let commentSchema = mongoose.Schema(
  {
    comments: { type: String },
    studentId: { type: mongoose.Schema.Types.ObjectId },
    rating: { type: String },
    teacher: { type: String },
  },
  { timestamps: true }
);

let Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;

let mongoose = require("mongoose");

let commentSchema = mongoose.Schema(
  {
    comments: { type: String },
    studentId: { type: mongoose.Schema.Types.ObjectId },
    // studentId: new mongoose.Types.ObjectId(),
    rating: { type: String },
    teacher: { type: String, default: "Rizwan Jamal" },

    //   depart_id: { type: mongoose.Schema.Types.ObjectId, ref: "Fcpsward" },
  },
  { timestamps: true }
);

let Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;

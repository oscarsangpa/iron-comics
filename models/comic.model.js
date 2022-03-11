const mongoose = require("mongoose");

const ComicSchema = new mongoose.Schema({
    title: { type: String, required: "Title is required" },
    author: { type: String, required: "Author is required" },
    cover: {
      type: String,
      default:
        "https://res.cloudinary.com/ddu4a2pzu/image/upload/v1646488530/get-lit/no-cover_atepnu.png",
    },
    year: { type: Number },
    pages: { type: Number },
    genre: { type: String },
    synopsis: { type: String },
    reviews: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

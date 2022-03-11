const mongoose = require("mongoose");

const ComicSchema = new mongoose.Schema({
    title: { 
      type: String, 
      required: "Title is required" 
    },
    author: { 
      type: String,
      required: "Author is required" 
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/ddu4a2pzu/image/upload/v1646488530/get-lit/no-cover_atepnu.png" },
    year: {
        type: Number },
    description: { 
        type: String },
        default: "",
    },
    categories: { 
      type: String 
    },
    description: { 
      type: String 
    },
    reviews: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Comment" 
    },
  },
  { timestamps: true,
     toJSON: { 
       virtuals: true } }
);

const Comic = mongoose.model('Comic', ComicSchema);
module.exports = Comic;

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
      default: "",
    },
    year: {
      type: Number
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
  { timestamps: true }
);

const Comic = mongoose.model('Comic', ComicSchema);
module.exports = Comic;

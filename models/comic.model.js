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
    cartoonist: {
        type: String,
        require: "Cartoonist is requerid" 
    }, 
    image: {
        type: String,
        default: "" 
    },
    year: {
      type: Number
    },
    categories: { 
      type: String 
    },
    description: { 
        type: String,
        default: ""
    },
    categories: { 
      type: String 
    },
    description: {
        type: String,
    },    
    categories: { 
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
    )



const Comic = mongoose.model('Comic', ComicSchema);

module.exports = Comic;
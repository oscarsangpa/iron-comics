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
        type: String
    }, 
    image: {
        type: String,
        default: "https://res.cloudinary.com/dyevght88/image/upload/v1647077390/ironcomics/image-comic-default/istockphoto-924949200-170667a_mguvly.jpg",
        required: "Image is requered" 
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
    },
    { timestamps: true, 
        toJSON: { 
            virtuals: true } }
    )
    


const Comic = mongoose.model('Comic', ComicSchema);

module.exports = Comic;
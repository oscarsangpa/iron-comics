const mongoose = require("mongoose");

const ComicSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: "Title is required" },
    author: { 
        type: String, 
        required: "Author is required" },
    cartoonist: {
        type: String,
        require: "Cartoonist is requerid" }, 
    image: {
        type: String,
        default:
        "https://res.cloudinary.com/ddu4a2pzu/image/upload/v1646488530/get-lit/no-cover_atepnu.png" },
    year: {
        type: Number },
    description: { 
            type: String },
    categories: { 
        type: String },
    // reviews: { 
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: "Comment" },
},
  
{ timestamps: true, 
    toJSON: { 
        virtuals: true } }
);

const Comic = mongoose.model('Book', bookSchema);

module.exports = Book;
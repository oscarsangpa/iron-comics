const mongoose = require('mongoose');
const { schema } = require('./user.model');

const ComicSchema = new mongoose.Schema({
 
 image: {
   type: String,
   default: "https://w0.peakpx.com/wallpaper/404/154/HD-wallpaper-marvel-logo-marvel-logo-marvel-comics.jpg"
 }
})

const Comic = mongoose.model('Comic', ComicSchema);

module.exports = Comic;


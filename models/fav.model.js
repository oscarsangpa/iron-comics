const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavSchema = new Schema({
  comic: {
    type: [String],
    ref: 'Comic',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, { timestamps: true })

const Fav = mongoose.model('Fav', FavSchema);
module.exports = Fav;
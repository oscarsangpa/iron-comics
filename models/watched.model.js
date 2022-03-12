const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WatchedSchema = new Schema({
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

const Watched = mongoose.model('Watched', WatchedSchema);
module.exports = Watched;
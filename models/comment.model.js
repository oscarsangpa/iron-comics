const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comic: {
    type: [String],
    ref: '',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  image:{
    type: mongoose.Schema.Types.String
  }
}, { timestamps: true })

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
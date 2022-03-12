const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comic',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},

{ timestamps: true })

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
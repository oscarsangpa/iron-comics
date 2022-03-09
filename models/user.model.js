const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN = /^.{8,}$/i;
const SALT_ROUNDS = 10;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'name is required',
    minLength: [4, 'name needs at least 4 chars']
  },
  email: {
    type: String,
    required: 'email is required',
    match: [EMAIL_PATTERN, 'email is not valid'],
    unique: true
  },
  password: {
    type: String,
    required: 'password is required',
    match: [PASSWORD_PATTERN, 'password needs at least 8 chars'],
  },
  image: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false
  },
  googleID: {
    type: String
  },
  activationToken: {
    type: String,
    default: () => {
      return Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7) +
        Math.random().toString(36).substring(7)
    }
  }
});

UserSchema.virtual('likes', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

UserSchema.virtual('favs', {
  ref: 'Fav',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});

UserSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'user',
  justOne: false,
});



UserSchema.pre('save', function(next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.hash(user.password, SALT_ROUNDS)
      .then((hash) => {
        user.password = hash
        next()
      })
      .catch(err => next(err))
  } else {
    next()
  }
})

UserSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
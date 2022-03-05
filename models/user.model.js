const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
/* La contraseña debe tener entre 8 y 15 caracteres, al menos un dígito, una minúscula, una mayúscula y caracter especial */
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
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
    match: [PASSWORD_PATTERN, 'password needs between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character'],
  },
  image: {
    type: String,
    defult: "https://res.cloudinary.com/dyevght88/image/upload/v1646469925/ironcomics/avatar-user/avatar-default_s5ic41.png"
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
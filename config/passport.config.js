const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = require('../models/user.model');

passport.serializeUser((user, next) => {
  next(null, user.id);
})

passport.deserializeUser((id, next) => {
  User.findById(id)
    .then(user => {
      next(null, user)
    })
    .catch(err => next(err))
})

passport.use('local-auth', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, next) => {
    User.findOne({ email })
      .then((user) => {
        if(!user) {
          next(null, false, { error: 'Email or password are incoorrect' })
        } else {
          return User.checkPassword(password)
          .then((match) => {
            if(!match) {
              next(null, false, { error: 'Email or password are incorrect' })
            } else {
              if (user.active) {
                next(null, user)
              } else {
                next(null, false, { error: 'Email or password are incorrect' })
              }
            }
          })
        }
      })
      .catch(err => next(err))
  }
))

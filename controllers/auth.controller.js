const mongoose = require('mongoose');
const User = require('../models/user.model');
const passport = require('passport');
const mailer = require('../config/nodemailer.config');


module.exports.register = (req, res, next) => {
  res.render('auth/register')
}

module.exports.doRegister = (req, res, next) => {
  const user = req.body;

  const renderWithErrors = (errors) => {
    res.render('auth/register', { errors, user });
  }

//falta añadir foto
  User.findOne({ email: user.email })
    .then((userFound) => {
      if(userFound) {
        renderWithErrors({ email: 'Email already in use'})
      } else {
        if(req.file) {
          user.image = req.file.path;
        }
        return User.create(user)
          .then((createdUser) => {
            mailer.activationEmail(createdUser.email, createdUser.tokenActivation)
            res.redirect('/login')
          })
      }
    })
    .catch(err => {
      if(err instanceof mongoose.Error.ValidationError) {
        renderWithErrors(err.errors)
      } else {
        next(err)
      }
    })
}

module.exports.activate = (req, res, next) => {
  const tokenActivation = req.params.token;

  User.findByIdAndUpdate(
    { tokenActivation, active: false },
    { active: true}
    )
    .then(() => {
      res.redirect('/')
    })
    .catch(err => next(err))
}

const login = (req, res, next, provider) => {
  passport.authenticate( provider || 'local-auth', (err, user, validations) => {
    if(err) {
      next(err)
    } else if(!user) {
      console.log(validations.error);
      res.status(404).render('auth/login', {errors: { email: validations.error} })
    } else {
      req.login(user, (loginError) => {
        console.log('login error: ', loginError, user);
        if(loginError) {
          next(loginError)
        } else {
          res.redirect('/');
        }
      })
    }
  })(req, res, next)
}

module.exports.login = (req, res, next) => {
  res.render('auth/login')
}
module.exports.doLogin = (req, res, next) => {
  login(req, res, next);
}

module.exports.loginGoogle = (req, res, next) => {
  login(req, res, next, 'google-auth');
}

module.exports.logout = (req, res, next) => {
  req.logout();
  res.redirect('/login');
}



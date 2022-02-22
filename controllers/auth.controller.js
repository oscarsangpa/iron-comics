const mongoose = require('mongoose');
const User = require('../models/user.model');

module.exports.login = (req, res, next) => {
  res.render('auth/login')
}

module.exports.register = (req, res, next) => {
  res.render('auth/register')
}

module.exports.doLogin = (req, res, next) => {
  res.render('auth/login')
}

module.exports.logout = (req, res, next) => {
  req.logout();
  res.redirect('/login');
}



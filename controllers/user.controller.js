const Comment = require('../models/comment.model');
const Fav = require('../models/fav.model');

module.exports.profile = (req, res, next) => {
      res.render("users/profile")

}
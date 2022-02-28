const mongoose = require('mongoose');
// const marvel = require ('../services/marvel.services')


// module.exports.list = (req, res, next) => {
//   marvel.getComicsMarvel()
//   .then(response => {
//     console.log(response)
//     res.render('list-comics', { comic: response.data })
//   })
//   .catch(err => {
//     next(err)
//   })
// }

module.exports.list = (req, res, next) => {
  res.render('comics/list-comics');
}

module.exports.detail = (req, res, next) => {
  res.render('comics/detail-comic');
}

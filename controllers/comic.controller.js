const mongoose = require('mongoose');

const marvelAPI = require('marvel-api');
 
const marvel = marvelAPI.createClient({
  publicKey: process.env.MV_PUBLIC_KEY,
  privateKey: process.env.MV_PRIVATE_KEY
});

module.exports.list = (req, res, next) => {
  marvel.comics.findAll(40)
  .then((comics) => {
    console.log(comics.data)
    res.render('comics/list-comics', { comics:comics.data });
  })
  .fail(err => next(err))
  .done();
}



module.exports.detail = (req, res, next) => {
  res.render('comics/detail-comic');
}

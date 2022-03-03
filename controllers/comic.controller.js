const mongoose = require('mongoose');

const marvelAPI = require('marvel-api');

const notImage ="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
 
const marvel = marvelAPI.createClient({
  publicKey: process.env.MV_PUBLIC_KEY,
  privateKey: process.env.MV_PRIVATE_KEY
});

module.exports.list = (req, res, next) => {
  marvel.comics.findAll(16)
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

const mongoose = require('mongoose');

const marvelAPI = require('marvel-api');

const notImage ="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
 
const marvel = marvelAPI.createClient({
  publicKey: process.env.MV_PUBLIC_KEY,
  privateKey: process.env.MV_PRIVATE_KEY
});

module.exports.list = (req, res, next) => {
  marvel.comics.findAll(8)
  .then((comics) => {
    // console.log(comics.data)
    res.render('comics/list-comics', { comics:comics.data });
  })
  .fail(err => next(err))
  .done();
}



module.exports.detail = (req, res, next) => {
  // comicId = data.id;

  marvel.comics.find(req.params.id)
  .then((comic) => {
    console.log(comic.data)
    res.render('comics/detail-comic', { comic: comic.data });
  })
  .fail(err => next(err))
  .done();
}

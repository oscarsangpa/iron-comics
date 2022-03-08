const mongoose = require('mongoose');

const comicService = require('../services/comics.service');
const Like = require('../models/like.model');
const Comment = require('../models/comment.model');
const Fav = require('../models/fav.model');



// const notImage ="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";



module.exports.list = (req, res, next) => {

  comicService.getComics()
    .then(response => {
      console.log(response.data.data.results);
      res.render('comics/list-comics', { comics: response.data.data.results })
    })
    .catch(err => next(err))
}


module.exports.detail = (req, res, next) => {

  comicService.getComicId(req.params.id)
  .then((comicId) => {
    console.log(comicId.data.data.results[0])
    res.render('comics/detail-comic', { comicId: comicId.data.data.results[0] });
  })
  .catch(err => next(err))
}

module.exports.byCharacter = (req, res, next) => {
  marvel.characters.findByName(req.query.name)
    .then((char) => {
      console.log(char.data[0].id.toString());
      marvel.comics.characters(char.data[0].id.toString())
        .then((comics => {
          console.log(comics);
          // res.render('comics/by-character', { comics: comics.data });
        }))
        .fail(console.error)
        .done();
    })
    .fail(err => next(err))
    .done();
}


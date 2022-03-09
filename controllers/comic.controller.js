const mongoose = require('mongoose');

const comicService = require('../services/comics.service');

// const notImage ="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";


module.exports.list = (req, res, next) => {

  comicService.getComics()
    .then(response => {
      // console.log(response.data.data.results);
      res.render('comics/home', { comics: response.data.data.results })
    })
    .catch(err => next(err))
}


module.exports.detail = (req, res, next) => {

  comicService.getComicId(req.params.id)
  .then((comicId) => {
    // console.log(comicId.data.data.results[0])
    res.render('comics/detail-comic', { comicId: comicId.data.data.results[0] });
  })
  .catch(err => next(err))
}


module.exports.byCharacter = (req, res, next) => {
  const name = req.query.name;
  
  comicService.getCharacters(name)
    .then((char) => {
      const characterId = char.data.data.results[0]?.id;

      comicService.getComicsByCharacterId(characterId)
        .then(comics => {
          res.render('comics/by-character', { comics: comics.data.data.results });
        })
    })
    .catch(err => next(err));
}


// const mongoose = require('mongoose');
const comicService = require('../services/comics.service');

module.exports.list = (req, res, next) => {
  comicService.getComics()
    .then(response => {
      console.log(response.data.data.results);
      res.render('comics/list-comics', { comics: response.data.data.results })
    })
    .catch(err => next(err))
}

// const marvelAPI = require('marvel-api');
 
// const marvel = marvelAPI.createClient({
//   publicKey: process.env.MV_PUBLIC_KEY,
//   privateKey: process.env.MV_PRIVATE_KEY
// });

// module.exports.list = (req, res, next) => {
//   marvel.comics.findAll(16)
//   .then((comics) => {
//     console.log(comics.data)
//     res.render('comics/list-comics', { comics:comics.data });
//   })
//   .fail(err => next(err))
//   .done();
// }



// module.exports.detail = (req, res, next) => {
//   comicId = `${data.id}`;

//   marvel.comics.find(comicId)
//   .then((comicId) => {
//     res.render('comics/detail-comic', { comicId: comicId.data});
//   })
//   .fail(err => next(err))
//   .done();
// }

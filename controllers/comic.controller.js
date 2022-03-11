const mongoose = require('mongoose');
const Comic = require('../models/comic.model');

// const comicService = require('../services/comics.service');
const Comment = require('../models/comment.model');
const Fav = require('../models/fav.model');

// const notImage ="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

module.exports.list = (req, res, next) => {
  Comic.find()
    .then((comic) => {
      res.render('comics/home', comic)
    })
    .catch(err => next(err));
  }


//   comicService.getComics()
//     .then(response => {
//       // if ( response.data.data.results.thumbnail.path.includes(notImage)) {
//       //   next()
//       // } else {

//         // console.log(response.data.data.results);
//         res.render('comics/home', { comics: response.data.data.results })
//       // }
//     })
//     .catch(err => next(err))
// }




module.exports.detail = (req, res, next) => {

  Comic.findById()
    .then(comic => {
      res.render('comics/detail-comic', comic)
    })
    .catch(err => next(err))
  }

//   comicService.getComicId(req.params.id)
//   .then((comicId) => {
//     // console.log(comicId.data.data.results[0])
//     res.render('comics/detail-comic', { comicId: comicId.data.data.results[0] });
//   })
//   .catch(err => next(err))
// }


// module.exports.byCharacter = (req, res, next) => {
//   const name = req.query.name;
  
//   comicService.getCharacters(name)
//     .then((char) => {
//       const characterId = char.data.data.results[0]?.id;

//       comicService.getComicsByCharacterId(characterId)
//         .then(comics => {
//           res.render('comics/by-character', { comics: comics.data.data.results });
//         })
//     })
//     .catch(err => next(err));
// }

    module.exports.createComic = (req, res, next) => {
      res.render('comics/new-comic');
    }

    module.exports.doCreateComic = (req, res, next) => {

      const comic = new Comic({
        title: req.body.titlle,
        author: req.body.author,
        image: req.body.image || undefined,
        categories: req.body.categories,
        description: req.body.description,

      });

      comic 
        .save()
        .then(() => res.redirect('/home'))
        .catch((err) => {
          if(err instanceof mongoose.Error.ValidationError) {
            res.status(400).render('comics/new-comic',{
              errors: err.errors,
              comics,

            });
          } else {
            next(err)
          }
        })

      }

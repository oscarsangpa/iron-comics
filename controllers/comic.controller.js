const mongoose = require('mongoose');
const Comic = require('../models/comic.model');

// const comicService = require('../services/comics.service');
const Comment = require('../models/comment.model');
const Fav = require('../models/fav.model');

// const notImage ="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

module.exports.list = (req, res, next) => {
  Comic.find()
    .then((comics) => {
      res.render('comics/home', {comics })
    })
    .catch(error => next(error));
  }


module.exports.detail = (req, res, next) => {
  Comic.findById(req.params.id)
      .then((comic) => {
          if(comic) {
              res.render('comics/detail-comic', { comic });
          } else {
          res.redirect('comics/home');
          }
      })
      .catch(error => next(error));
}


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
            comic
          });
        } else {
          next(err)
        }
      })
}


module.exports.editComic = (req, res, next) => {

  Comic.findById(req.params.id)
    .then((comic) => {
      res.render('comics/edit', {
        comic,
      
      });
    })
    .catch((error) => next(error))

};

module.exports.doEdit = (req, res, next) => {
  Comic.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
    .then((comic) => res.redirect(`/comics/${comic.id}`))
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        req.body.id = req.params.id;
        res.status(400).render('comics/edit', {
          errors: error.errors,
          comic: req.body,
          
        });
      } else {
        next(error);
      }
    });
};

module.exports.delete = (req, res, next) => {
  Comic.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/home'))
    .catch(error => next(error));
};


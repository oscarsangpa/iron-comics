require('dotenv').config();

const mongoose = require('mongoose')
const comics = require('../data/comics.json')
const Comic = require('../models/comic.model')

require('../config/db.config');

mongoose.connection.once('open', () => {
  console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);

  mongoose.connection.db
    .dropDatabase()
      .then(() => `O.o! ${mongoose.connection.db.databaseName} dropped!`)
      .then(() => {
        comics.forEach(comics => {
          new Comic({
            ...comics,
          })
          .save()
          .then((comics) => console.log(comics))   
          .catch(err =>  console.error(err))
        })
      })
      .catch(err => console.error('mongoose', err))
})

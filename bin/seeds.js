require('dotenv').config();

const mongoose = require('mongoose')
const comics = require('../data/comic.json')
const Comic = require('../models/comic.model')
const Dish = require('../models/dish.model');

require('../config/db.config');

mongoose.connection.once('open', () => {
  console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);

  mongoose.connection.db
    .dropDatabase()
      .then(() => `O.o! ${mongoose.connection.db.databaseName} dropped!`)
      .then(() => {
        restaurants.forEach(restaurant => {
          new Restaurant({
            ...comics,
    
          }).save()
            .then(comics => {
              for (i = 0; i < 10; i++) {
                const dish = new Dish({
                  name: 'Espagüettis :) ',
                  ingredients: [],
                  vegFriendly: Math.random() > 0.5,
                  cost: Math.random() * 20,
                  image: 'https://www.guiadelnino.com/var/guiadelnino.com/storage/images/recetas-para-ninos-y-bebes/pasta/macarrones-con-tomate-y-chorizo/7625250-3-esl-ES/macarrones-con-tomate-y-chorizo_w1140.jpg',
                  restaurant: restaurant._id,
                });

                dish
                  .save()
                  .then((dish) => {
                    console.log(`dish ${dish.name} for ${restaurant.name}`);
                  })
                  .catch(console.error);
              }
            })
            .catch(err =>  console.error(err))
        })
      })
      .catch(err => console.error('mongoose', err))
})

const hbs = require('hbs');

hbs.registerPartials('./views/partials');
const notImage ="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";



hbs.registerHelper('imageNotFound', function (options) {
  const { comic, thumbnail } = options.hash;

  if (comic.thumbnail.path !== notImage) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
})

hbs.registerHelper('restaurantHasCategory', function (options) {
  const { restaurant, category } = options.hash;

  if (restaurant && restaurant.categories.includes(category)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
})


const hbs = require('hbs');

hbs.registerPartials('./views/partials');

hbs.registerHelper('notImage', function (options) {
  const { comic, thumbnail } = options.hash;

  if (comic.thumbnail.path.includes("http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available")) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
})


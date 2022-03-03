const hbs = require('hbs');

hbs.registerPartials('./views/partials');

hbs.registerHelper('notImage', function (options) {
  const { comic, thumbnail } = options.hash;

  if (comic.thumbnail.path.length === 0 && comic.thumbnail.extension.length === 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
})


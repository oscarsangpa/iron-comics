const apiMarvel = 'https://gateway.marvel.com/v1/public/comics'

fetch(apiMarvel)
  .then(response => response.json())
  .then(data => {
    console.log(data) 

  })
  .catch(error => console.error(error));

  module.exports = comicsMarvel


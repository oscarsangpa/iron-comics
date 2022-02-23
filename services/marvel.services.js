const httpClient = require('./axios.services');

const getComicsMarvel = () => httpClient.get('//v1/public/comics');


module.exports = getComicsMarvel;




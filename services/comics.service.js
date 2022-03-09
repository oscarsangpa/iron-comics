const httpClient = require('./axios.services');

const getComics = () => httpClient.get('/comics');


const getComicId = (comicId) => httpClient.get(`/comics/${comicId}`);

const getComicsByCharacterId = (id) => httpClient.get('/comics', { params: { characters: id }});


const getCharacters = (name) => httpClient.get('/characters', { params: { name } });

// const deleteBootcamp = (bootcampId) => httpClient.delete(`/bootcamps/${bootcampId}`)


module.exports = {
  getComics,
  getComicId,
  getComicsByCharacterId,
  getCharacters,
}
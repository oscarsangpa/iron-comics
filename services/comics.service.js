const httpClient = require('./axios.services');

const getComics = () => httpClient.get('/list-comics');

const getComicId = (comicId) => httpClient.get(`/detail-comic/${comicId}`);

// const createBootcamp = (data) => httpClient.post('/bootcamps', data)

// const deleteBootcamp = (bootcampId) => httpClient.delete(`/bootcamps/${bootcampId}`)


module.exports = {
  getComics,
  getComicId,
  // createBootcamp,
  // deleteBootcamp
}
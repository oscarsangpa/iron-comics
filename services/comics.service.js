const httpClient = require('./axios.services');

const getComics = () => httpClient.get();

const getComicDetail = () => httpClient.get()

const getComicId = (comicId) => httpClient.get(`/${comicId}`);

// const createBootcamp = (data) => httpClient.post('/bootcamps', data)

// const deleteBootcamp = (bootcampId) => httpClient.delete(`/bootcamps/${bootcampId}`)


module.exports = {
  getComics,
  getComicId
}
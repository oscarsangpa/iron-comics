const axios = require('axios');

const MASTER_KEY = 'ts=1&apikey=5b3db6e8179d8f881f55b881ee3f5c15&hash=1a25a5c80e371c28e1ecc5f4e78f84e8'
// 23FA5061EB064EE6AEA129017D62C9EB
// 23fa5061eb064ee6aea129017d62c9eb
const httpClient = axios.create({
  baseURL: 
  `https://gateway.marvel.com:443/v1/public/comics?${MASTER_KEY}`
})

module.exports = httpClient;
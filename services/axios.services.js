const error = require('http-errors');
const axios = require('axios');
const md5 = require('blueimp-md5');

const ts = new Date().getTime();
const privateKey = process.env.MV_PRIVATE_KEY;
const publicKey = process.env.MV_PUBLIC_KEY;
const hash = md5(ts+privateKey+publicKey);

const httpClient = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
  params : { ts, apikey: publicKey, hash }
})

module.exports = httpClient;
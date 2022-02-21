require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

require('./config/db.config')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs')
require('./config/hbs.config')


const router = require('./config/routes.config')
app.use('/', router);


const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`App listen on port ${port}`)
});


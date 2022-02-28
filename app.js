require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const passport = require('passport');

require('./config/db.config')

const sessionConfig = require('./config/session.config');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.use(sessionConfig);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
require('./config/hbs.config');

require('./config/passport.config');

app.use(passport.initialize());
app.use(passport.session());


const router = require('./config/routes.config');
app.use('/', router);

app.use((req, res, next) => {
  
  res.status(404).render("errors/not-found");
});

app.use((err, req, res, next) => {
  
  console.error("ERROR", req.method, req.path, err);

  if (!res.headersSent) {
    res.status(500).render("errors/error");
  }
});


const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`App listen on port ${port}`)
});


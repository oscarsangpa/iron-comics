const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');
const user = require('../controllers/user.controller');
//const marvelComics = require('../controllers/comic.controller');



/* Home route */
router.get('/', (req, res, next) => {
  res.render("home")
})

/** Auth routes */
router.get('/login', auth.login);
router.get('/register', auth.register);
router.post('/login', auth.doLogin);

/* User routes */
router.get('/profile', user.profile);

/* Marvel Comics routes */
//router.get('/list-comics', marvelComics.list);



module.exports = router;


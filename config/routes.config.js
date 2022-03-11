const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../controllers/auth.controller');
const user = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
// const marvelComics = require('../controllers/comic.controller');
const comics = require('../controllers/comic.controller');

const SCOPES = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email"
]


/* Home route */
router.get('/', comics.list);

/** Auth routes */
router.get('/register', auth.register);
router.get('/login', auth.login);
router.post('/register', auth.doRegister);
router.get('/activate/:token', auth.activate);
router.post('/login', auth.doLogin);
router.get('/login/google', passport.authenticate('google-auth', { scope: SCOPES  } ));
router.get('/auth/google/callback', auth.loginGoogle);
router.get('/logout', auth.logout);



/* User routes */
router.get('/profile', /*authMiddleware.isAuthenticated,*/ user.profile);


/* Marvel Comics routes */
// router.get('/list-comics', /*authMiddleware.isAuthenticated*/ comics.list);
router.get('/detail-comic/:id', authMiddleware.isAuthenticated, comics.detail);
router.get('/by-character', /*authMiddleware.isAuthenticated*/ comics.byCharacter);


module.exports = router;


const express = require('express');
const router = express.Router();
const passport = require('passport');
const auth = require('../controllers/auth.controller');
const user = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const comics = require('../controllers/comic.controller');
const upload = require('../config/storage.config');

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
// router.get('/activate/:token', auth.activate);
router.post('/login', auth.doLogin);
router.get('/login/google', passport.authenticate('google-auth', { scope: SCOPES  } ));
router.get('/auth/google/callback', auth.loginGoogle);
router.get('/logout', auth.logout);



/* User routes */
router.get('/profile', /*authMiddleware.isAuthenticated,*/ user.profile);


/* Marvel Comics routes */
router.get('/comics/create', /*authMiddleware.isAuthenticated,*/ comics.createComic);
router.post('/comics/create', /*authMiddleware.isAuthenticated,*/upload.single('image'), comics.doCreateComic);
router.get('/comics/:id', /*authMiddleware.isAuthenticated,*/ comics.detail);
router.get('/comics/:id/edit', /*authMiddleware.isAuthenticated,*/ comics.editComic);
router.post('/comics/:id/edit', /*authMiddleware.isAuthenticated,*/upload.single('image'), comics.doEdit);
router.post('/comics/:id/delete', /*authMiddleware.isAuthenticated,*/ comics.delete);



module.exports = router;


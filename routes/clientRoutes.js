const express = require('express');

const controller = require('../controllers/clientController');

const router = express.Router();

router.get('/', controller.home);
router.get('/signup', controller.signup);
router.get('/login', controller.login);

router.get('/movies', controller.movies);
router.get('/series', controller.series);
router.get('/games', controller.games);

// ========= main pages
router.get('/game', controller.game);
router.get('/movie', controller.movie);
router.get('/serie', controller.serie);
router.get('/season', controller.season);
router.get('/download', controller.download);

module.exports = router;

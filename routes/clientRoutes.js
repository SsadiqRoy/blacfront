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
router.get('/game/:slug/:id', controller.game);
router.get('/movie/:slug/:id', controller.movie);
router.get('/serie/:slug/:id', controller.serie);
router.get('/serie/:slug/season/:number/:serie/:id', controller.season);
// eg: /serie/game-of-thrones/season/2/8addf23487e8490fb1e05a214db0da0c/g36df23487e8490fb1e05a214db0dpa9
router.get('/download/:type/:id', controller.download);
// format: /download/movie/klwlsksdfjoaio29dsow

module.exports = router;

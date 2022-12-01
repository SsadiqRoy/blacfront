const express = require('express');

const controller = require('../controllers/adminController');
const { permitAdmins } = require('../middlewares/globalMiddlewares');

const router = express.Router();

// ============= main admin pages
router.use(permitAdmins);
router.get('/', controller.profile);
router.get('/movies', controller.movies);
router.get('/series', controller.series);
router.get('/games', controller.games);
router.get('/notifications', controller.notifications);
router.get('/schedules', controller.schedules);
router.get('/problems', controller.problems);
router.get('/suggestions', controller.suggestions);

// ============= form pages ==========
router.get('/movieform', controller.movieform);
router.get('/gameform', controller.gameform);
router.get('/serieform', controller.serieform);
router.get('/seasonform/:serieId', controller.seasonform);
router.get('/episodeform/:seasonId', controller.episodeform);
router.get('/scheduleform', controller.scheduleform);

// ============== update pages =================
router.get('/updatemovie/:id', controller.updatemovie);
router.get('/updategame/:id', controller.updategame);
router.get('/aboutgame/:id', controller.aboutgame);
router.get('/updateserie/:id', controller.updateserie);
router.get('/updateschedule/:id', controller.updateschedule);
router.get('/updateseason/:id', controller.updateseason);
router.get('/updateepisode/:id', controller.updateepisode);

module.exports = router;

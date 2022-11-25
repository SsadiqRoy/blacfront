const { catchAsync, getRequest, stringifyQuery } = require('../utils/utils');
const jsPath = `/javascript/${process.env.js_folder}/admin`;
// const jsPath = `/javascript/watched/admin`;

//
exports.profile = catchAsync(async (req, res, next) => {
  const ext = {
    title: 'Account Profile',
    page: 'profile',
    searchPlaceholder: '',
    js: `${jsPath}/profile`,
  };

  res.status(200).render('admin/profile', { ext });
});

//
exports.movies = catchAsync(async (req, res, next) => {
  let query = '';
  if (req.query) query = stringifyQuery(req.query);

  // const { meta, data: movies } = await getRequest(req, `/movies${query}`);
  const { meta, data: movies } = await getRequest(req, `/movies?limit=30&fields=id,landscape,title,rating,description`);
  // console.log(meta);

  const ext = {
    title: 'Movies',
    page: 'movies',
    searchPlaceholder: 'in movies',
    js: `${jsPath}/movies`,
  };

  // console.log(movies);
  res.status(200).render('admin/movies', { ext, meta, movies });
});

//
exports.series = catchAsync(async (req, res, next) => {
  const { meta, data: series } = await getRequest(req, '/series?limit=30&fields=id,landscape,title,rating,description');

  const ext = {
    title: 'series',
    page: 'series',
    searchPlaceholder: 'in series',
    js: `${jsPath}/series`,
  };

  res.status(200).render('admin/series', { ext, meta, series });
});

//
exports.games = catchAsync(async (req, res, next) => {
  // console.log('about to hit');
  const { meta, data: games } = await getRequest(req, '/games?limit=30&fields=id,landscape,title,rating,description');
  // console.log(games);
  const ext = {
    title: 'games',
    page: 'games',
    searchPlaceholder: 'in games',
    js: `${jsPath}/games`,
  };

  res.status(200).render('admin/games', { ext, meta, games });
});

//
exports.notifications = catchAsync(async (req, res, next) => {
  const { meta, data: notifications } = await getRequest(req, '/notifications');
  // console.log(notifications);

  const ext = {
    title: 'notifications',
    page: 'notifications',
    searchPlaceholder: 'in notifications',
    js: `${jsPath}/notifications`,
  };

  res.status(200).render('admin/notifications', { ext, notifications, meta });
});

//
exports.schedules = catchAsync(async (req, res, next) => {
  const { meta, data: schedules } = await getRequest(req, '/schedules?order=date&limit=2');

  const ext = {
    title: 'schedules',
    page: 'schedules',
    searchPlaceholder: 'in schedules',
    js: `${jsPath}/schedules`,
  };

  res.status(200).render('admin/schedules', { ext, schedules, meta });
});

/*




*/

// ==================== forms
exports.movieform = catchAsync(async (req, res, next) => {
  const ext = {
    title: 'Create Movie',
    page: 'movieform',
    searchPlaceholder: '',
    js: `${jsPath}/movieform`,
  };

  res.status(200).render('admin/movieform', { ext });
});

exports.gameform = catchAsync(async (req, res, next) => {
  const ext = {
    title: 'Create Game',
    page: 'gameform',
    searchPlaceholder: '',
    js: `${jsPath}/gameform`,
  };

  res.status(200).render('admin/gameform', { ext });
});

exports.serieform = catchAsync(async (req, res, next) => {
  const ext = {
    title: 'Create Movie',
    page: 'serieform',
    searchPlaceholder: '',
    js: `${jsPath}/serieform`,
  };

  res.status(200).render('admin/serieform', { ext });
});

exports.seasonform = catchAsync(async (req, res, next) => {
  const { serieId } = req.params;
  const ext = {
    title: 'Create Movie',
    page: 'seasonform',
    searchPlaceholder: '',
    js: `${jsPath}/seasonform`,
  };

  res.status(200).render('admin/seasonform', { ext, serieId });
});

//
exports.scheduleform = catchAsync(async (req, res, next) => {
  const ext = {
    title: 'Create Schedule',
    page: 'scheduleform',
    searchPlaceholder: '',
    js: `${jsPath}/scheduleform`,
  };

  res.status(200).render('admin/scheduleform', { ext });
});

exports.episodeform = catchAsync(async (req, res, next) => {
  const { seasonId } = req.params;
  const ext = {
    title: 'Create Movie',
    page: 'episodeform',
    searchPlaceholder: '',
    js: `${jsPath}/seasonform`,
  };

  res.status(200).render('admin/episodeform', { ext, seasonId });
});

/*



*/

// ===================== update pages
exports.updatemovie = catchAsync(async (req, res, next) => {
  const { data: movie } = await getRequest(req, `/movies/${req.params.id}`);

  const ext = {
    title: `Update ${movie.title}`,
    page: 'movieform',
    searchPlaceholder: 'in movies',
    js: `${jsPath}/movieform`,
  };

  res.status(200).render('admin/movieform', { ext, movie });
});

//
exports.updategame = catchAsync(async (req, res, next) => {
  const { data: game } = await getRequest(req, `/games/${req.params.id}`);

  const ext = {
    title: `Update ${game.title}`,
    page: 'gameform',
    searchPlaceholder: 'in games',
    js: `${jsPath}/gameform`,
  };

  res.status(200).render('admin/gameform', { ext, game });
});

//
exports.aboutgame = catchAsync(async (req, res, next) => {
  const { data: game } = await getRequest(req, `/games/${req.params.id}`);

  const ext = {
    title: `Update ${game.title}`,
    page: 'gameform',
    searchPlaceholder: 'in games',
    js: `${jsPath}/gameform`,
    about: true,
  };

  res.status(200).render('admin/gameabout', { ext, game });
});

//
exports.updateserie = catchAsync(async (req, res, next) => {
  const { data: serie } = await getRequest(req, `/series/${req.params.id}`);

  const ext = {
    title: `Update ${serie.title}`,
    page: 'serieform',
    searchPlaceholder: 'in series',
    js: `${jsPath}/serieform`,
  };

  res.status(200).render('admin/serieform', { ext, serie });
});

//
exports.updateseason = catchAsync(async (req, res, next) => {
  const { data: season } = await getRequest(req, `/seasons/${req.params.id}`);

  const ext = {
    title: `Update ${season.title}`,
    page: 'seasonform',
    searchPlaceholder: 'in seasons',
    js: `${jsPath}/seasonform`,
  };

  res.status(200).render('admin/seasonform', { ext, season });
});

//
exports.updateepisode = catchAsync(async (req, res, next) => {
  const { data: episode } = await getRequest(req, `/episodes/${req.params.id}`);

  const ext = {
    title: `Update ${episode.title}`,
    page: 'episodeform',
    searchPlaceholder: 'in episodes',
    js: `${jsPath}/seasonform`,
  };

  res.status(200).render('admin/episodeform', { ext, episode });
});

//
exports.updateschedule = catchAsync(async (req, res, next) => {
  const { data: schedule } = await getRequest(req, `/schedules/${req.params.id}`);

  const ext = {
    title: `Update Schedule`,
    page: 'scheduleform',
    searchPlaceholder: 'in schedules',
    js: `${jsPath}/scheduleform`,
  };

  res.status(200).render('admin/scheduleform', { ext, schedule });
});

const { catchAsync } = require('../utils/utils');
const jsPath = '/javascript/build/client';
exports.signup = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'signup',
    title: 'Only invited guest',
    js: `${jsPath}/signup`,
  };

  res.status(200).render('client/signup', { ext });
});

exports.login = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'signup',
    title: 'Only Admin',
    js: `${jsPath}/login`,
  };

  res.status(200).render('client/login', { ext });
});

//

// ======================= search and home pages

exports.home = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'home',
    title: 'Movie, Games & Tv Series',
    js: `${jsPath}/home`,
  };

  res.status(200).render('client/home', { ext });
});

exports.movies = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'search',
    title: 'Movies',
    js: `${jsPath}/movies`,
  };

  res.status(200).render('client/movies', { ext });
});

exports.series = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'search',
    title: 'Series',
    js: `${jsPath}/series`,
  };

  res.status(200).render('client/series', { ext });
});

exports.games = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'search',
    title: 'Games',
    js: `${jsPath}/games`,
  };

  res.status(200).render('client/games', { ext });
});

//

// ==================== main pages

exports.game = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'main',
    title: 'Call Of Duty: Morden Warfare',
    js: `${jsPath}/game`,
  };

  res.status(200).render('client/game', { ext });
});

exports.movie = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'main',
    title: 'Dune Collections',
    js: `${jsPath}/movie`,
  };

  res.status(200).render('client/movie', { ext });
});

exports.serie = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'main',
    title: 'The Lord Of The Rings: The Rings Of Power',
    js: `${jsPath}/serie`,
  };

  res.status(200).render('client/serie', { ext });
});

exports.season = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'main',
    title: 'The Lord Of The Rings: The Rings Of Power',
    js: `${jsPath}/season`,
  };

  res.status(200).render('client/season', { ext });
});

exports.download = catchAsync(async (req, res, next) => {
  const ext = {
    css: 'download',
    title: '480p download',
    js: `${jsPath}/download`,
  };

  res.status(200).render('client/download', { ext });
});

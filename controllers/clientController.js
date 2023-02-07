const { catchAsync, getRequest } = require("../utils/utils");
const jsPath = `/javascript/${process.env.js_folder}/client`;
// const jsPath = '/javascript/watched/client';

exports.signup = catchAsync(async (req, res, next) => {
  const ext = {
    css: "signup",
    title: "Only invited guest",
    js: `${jsPath}/signup`,
  };

  res.status(200).render("client/signup", { ext });
});

exports.login = catchAsync(async (req, res, next) => {
  const ext = {
    css: "signup",
    title: "Only Admin",
    js: `${jsPath}/login`,
  };

  res.status(200).render("client/login", { ext });
});

//

// ======================= search and home pages

exports.home = catchAsync(async (req, res, next) => {
  const ext = {
    css: "home",
    title: "Free Download Movies, Games & Tv Series",
    js: `${jsPath}/home`,
    page: "home",
    query: "movies",
  };

  res.status(200).render("client/home", { ext });
});

exports.movies = catchAsync(async (req, res, next) => {
  const ext = {
    css: "search",
    title: "Inex of Movies, New Trending Movies",
    js: `${jsPath}/movies`,
    page: "movies",
    query: "movies",
  };

  res.status(200).render("client/movies", { ext });
});

exports.series = catchAsync(async (req, res, next) => {
  const ext = {
    css: "search",
    title: "Index of Tv Series, New Trending Series",
    js: `${jsPath}/series`,
    page: "series",
    query: "series",
  };

  res.status(200).render("client/series", { ext });
});

exports.games = catchAsync(async (req, res, next) => {
  const ext = {
    css: "search",
    title: "Index of Pc Games",
    js: `${jsPath}/games`,
    page: "games",
    query: "games",
  };

  res.status(200).render("client/games", { ext });
});

//

// ==================== main pages

exports.game = catchAsync(async (req, res, next) => {
  const { data: game } = await getRequest(req, `/games/${req.params.id}`);

  const ext = {
    css: "main",
    title: game.title,
    js: `${jsPath}/game`,
    page: "game",
    query: "games",
  };

  res.status(200).render("client/game", { ext, game });
});

exports.movie = catchAsync(async (req, res, next) => {
  const { data: movie } = await getRequest(req, `/movies/${req.params.id}`);

  const ext = {
    css: "main",
    title: movie.title,
    js: `${jsPath}/movie`,
    page: "movie",
    query: "movies",
  };

  res.status(200).render("client/movie", { ext, movie });
});

exports.serie = catchAsync(async (req, res, next) => {
  const { data: serie } = await getRequest(req, `/series/${req.params.id}`);
  // console.log(serie);
  const ext = {
    css: "main",
    title: serie.title,
    js: `${jsPath}/serie`,
    page: "serie",
    query: "series",
  };

  // console.log(serie);
  res.status(200).render("client/serie", { ext, serie });
});

exports.season = catchAsync(async (req, res, next) => {
  const { data: season } = await getRequest(req, `/seasons/one/${req.params.id}`);
  const { data: serie } = await getRequest(req, `/series/basic/${req.params.serie}`);

  // console.log(season.Episodes[0]);
  const ext = {
    css: "main",
    title: `${serie.title} season ${season.season}`,
    js: `${jsPath}/serie`,
    page: "season",
    query: "series",
  };

  res.status(200).render("client/season", { ext, serie, season });
});

exports.download = catchAsync(async (req, res, next) => {
  const { data } = await getRequest(req, `/links/getlink/${req.params.id}`);
  const link = data.link;

  const div = Math.floor(link.length / 3);
  const one = 0;
  const two = div;
  const three = two + div;

  const first = link.slice(one, two);
  const second = link.slice(two, three);
  const third = link.slice(three);

  const ext = {
    css: "download",
    title: `download ${link.title || link.resolution || "part" + link.part}`,
    js: `${jsPath}/download`,
    page: "download",
  };

  res.status(200).render("client/download", { ext, link: { first, second, third } });
});

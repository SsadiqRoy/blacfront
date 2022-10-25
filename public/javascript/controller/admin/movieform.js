import * as view from '../../view/admin/movieformview.js';
import * as model from '../../model/model.js';

//
async function controlCreate(btnId) {
  try {
    const movieData = view.getMovieData();
    const movie = await model.post('/movies/create', movieData);
    const { id } = movie;
    await saveLinks(id);

    view.renderCreated(movie, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

async function controlUpdate(movieId, btnId) {
  try {
    const movieData = view.getMovieData();
    const movie = await model.patch(`/movies/${movieId}`, movieData);
    await updateLinks();

    view.renderCreated(movie, 'updated', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

async function saveLinks(movieId) {
  const links = view.getLinks();
  links.forEach(async (link) => {
    link.movie = movieId;
    await model.post('/links/create', link);
  });
}

//
async function updateLinks() {
  const links = view.getLinks();
  links.forEach(async (link) => {
    if (link.old !== link.link) {
      await model.patch(`/links/${link.id}`, link);
    }
  });
}

async function init() {
  view.initilizer();
  view.handleCreate(controlCreate, controlUpdate);
}
init();

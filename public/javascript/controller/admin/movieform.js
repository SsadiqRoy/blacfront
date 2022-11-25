import * as view from '../../view/admin/movieformview.js';
import * as model from '../../model/model.js';

//
async function controlCreate(btnId) {
  try {
    const movieData = view.getMovieData();
    const movie = await model.post('/movies/create', movieData);
    const { id } = movie;
    // await saveLinks(id);

    view.renderCreated(movie, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

async function controlUpdate(movieId, btnId) {
  try {
    const movieData = view.getMovieData();
    const movie = await model.patch(`/movies/${movieId}`, movieData);
    // await updateLinks(movieId);

    view.renderCreated(movie, 'updated', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlCreateLink(movieId, btnId) {
  try {
    if (!movieId) throw new Error('First save the movie and update with the part links');

    const data = view.getLinkData();
    data.movie = movieId;
    // console.log(data);
    // return;
    const res = await model.post('/links/create', data);

    view.renderCreateLink(res, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlUpdateLink(linkId, btnId) {
  try {
    const data = view.getLinkData();
    // console.log(data);
    // return;
    let res;
    if (data.link) res = await model.patch(`/links/${linkId}`, data);
    if (!data.link) res = await model.deletefull(`/links/${linkId}`);

    view.renderCreateLink(res, 'updated', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlDeleteLink(linkId, btnId) {
  try {
    const res = await model.deletefull(`/links/${linkId}`);

    view.renderDeleteLInk(res, btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

// async function saveLinks(movieId) {
//   const links = view.getLinks();

//   links.forEach(async (link) => {
//     if (link.link) {
//       link.movie = movieId;
//       await model.post('/links/create', link);
//     }
//   });
// }

//
// async function updateLinks(movieId) {
//   const links = view.getLinks();

//   links.forEach(async (link) => {
//     if (link.link && link.link !== link.old) {
//       await model.patch(`/links/${link.id}`, link);
//     }
//     if (link.old && !link.link) {
//       await model.deletefull(`/links/${link.id}`);
//     }
//     if (link.link && !link.id) {
//       link.movie = movieId;
//       await model.post(`/links/create`, link);
//     }
//   });
// }

async function init() {
  view.initilizer();
  view.handleCreate(controlCreate, controlUpdate);
  view.handleCreateLink(controlCreateLink, controlUpdateLink);
  view.handleDeleteLink(controlDeleteLink);
}
init();

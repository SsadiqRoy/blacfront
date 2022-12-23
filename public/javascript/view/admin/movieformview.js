import * as utils from '../../utils/utils.js';

// ================= RENDERRES =============
export const displayError = utils.displayError;

export function renderCreated(data, action, btnId) {
  if (!data) {
    utils.stopRotateBtn(btnId);
    return utils.alertResponse('failed creating or could not display results - try find on movies page', 6, 'failed');
  }

  utils.alertResponse(`Movie - ${data.title} - has been ${action}`);
  utils.stopRotateBtn(btnId);

  window.setTimeout(() => {
    window.location.assign(`/dashboard/updatemovie/${data.id}`);
  }, 1000);
}

/**
 * render response after creating or updating game
 * @param {Object} data response object (game link)
 * @param {String} action updated or created
 * @returns null - break action
 */
export function renderCreateLink(data, action, btnId) {
  if (!data) {
    utils.stopRotateBtn(btnId);
    utils.alertResponse('failed creating or could not display results - am reloading', 6, 'failed');
    window.setTimeout(() => window.location.reload(), 6500);
  }

  utils.alertResponse(`link ${data.title} has been ${action}`);
  utils.stopRotateBtn(btnId);

  utils.closePopup('create-link-popup', () => {
    window.setTimeout(() => window.location.reload(), 1000);
  });
}

/**
 * render response after creating or updating game
 * @param {Object} data response object (deleted game)
 * @returns null - break action
 */
export function renderDeleteLInk(data, btnId) {
  if (!data) {
    utils.alertResponse('failed deleting or could not display results, am reloading', 6, 'failed');
    utils.stopRotateBtn(btnId);
    return window.setTimeout(() => window.location.reload(), 6500);
  }
  utils.alertResponse('Link has been deleted successfully');
  utils.stopRotateBtn(btnId);

  utils.closePopup('delete-link-popup', () => window.location.reload());
}

/*





*/
// ======================== GETTERS ===============
export function getMovieData() {
  const title = document.getElementById('movie-title').value;
  const portrait = document.getElementById('movie-image-portrait').value;
  const landscape = document.getElementById('movie-image-landscape').value;
  const description = document.getElementById('movie-description').value;
  const tags = document.getElementById('movie-tags').value.split(',');
  const keywords = document.getElementById('movie-keywords').value.split(',');
  const companies = document.getElementById('movie-companies').value.split(',');
  const actors = document.getElementById('movie-actors').value.split(',');
  const charactors = document.getElementById('movie-charactors').value.split(',');
  const directors = document.getElementById('movie-directors').value.split(',');
  const company = document.getElementById('movie-company').value;
  const releasedDate = document.getElementById('movie-date').value;
  const country = document.getElementById('movie-country').value;
  const rating = document.getElementById('movie-rating').value;

  let data = { title, portrait, landscape, description, tags, keywords, companies };
  data = { ...data, actors, directors, company, releasedDate, country, rating, charactors };
  return data;
}

//

export function getLinkData() {
  const resolution = document.getElementById('link-resolution').value;
  const link = document.getElementById('link-link').value;
  const title = document.getElementById('link-title').value || document.getElementById('link-title-2');

  return { title, resolution, link };
}

/*




*/
// ===================== HANDLERS
export function handleCreate(controlCreate, controlUpdate) {
  const form = document.getElementById('create-movie');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    utils.rotateBtn('movie-btn');
    const { movieId } = form.dataset;

    if (!movieId) controlCreate('movie-btn');
    else controlUpdate(movieId, 'movie-btn');
  });
}

//
export function handleCreateLink(controlCreateLink, controlUpdateLink) {
  const form = document.getElementById('create-link');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      utils.rotateBtn('link-btn');
      const { linkId, movieId } = form.dataset;

      if (!linkId) {
        return controlCreateLink(movieId, 'link-btn');
      }

      controlUpdateLink(linkId, 'link-btn');
    });
}

//
export function handleDeleteLink(controlDeleteLink) {
  const form = document.getElementById('delete-link');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { linkId } = form.dataset;

      if (!linkId) return;
      utils.rotateBtn('delete-link-btn');
      controlDeleteLink(linkId, 'delete-link');
    });
}

// =================== INITIALIZER ===========
export function initilizer() {
  utils.adminSidebar();
  utils.fillSelects('movie-country', 'countries');

  manageLinkPopup();

  const movielinkBtn = document.getElementById('add-movie-link');

  // displaying popup on for creating movie link
  movielinkBtn &&
    movielinkBtn.addEventListener('click', (e) => {
      utils.fillSelects('link-resolution', 'resolutions');
      utils.fillSelects('link-title', 'titles');
      utils.openPopup('create-link-popup');
    });
}

/*







*/
// ====================== NON EXPORTING FUNCTOINS =======
/** display popup for creating links or deleting links */
function manageLinkPopup() {
  const cover = document.getElementById('movie-links');
  const form = document.getElementById('create-link');
  const deleteForm = document.getElementById('delete-link');

  cover &&
    cover.addEventListener('click', (e) => {
      // when the card icon is clicked
      const { target } = e;
      const card = target.closest('.movielink-card');
      const { linkId, resolution, link, title } = card.dataset;

      // when the edit button is clickd
      if (target.classList.contains('edit-link-btn')) {
        form.dataset.linkId = linkId;

        document.getElementById('link-resolution').dataset.value = resolution;
        utils.fillSelects('link-resolution', 'resolutions');
        document.getElementById('link-link').value = link;
        document.getElementById('link-title').dataset.value = title;
        utils.fillSelects('link-title', 'titles');
        document.getElementById('link-title-2').value = title;

        utils.openPopup('create-link-popup', () => {
          form.dataset.linkId = '';
          document.getElementById('link-resolution').dataset.value = '';
          document.getElementById('link-title').dataset.value = '';
          document.getElementById('link-link').value = '';
          document.getElementById('link-title-2').value = '';
        });
      }

      // when the delect icon is clicked
      if (target.classList.contains('delete-link-btn')) {
        deleteForm.dataset.linkId = linkId;
        utils.openPopup('delete-link-popup', () => {
          deleteForm.dataset.linkId = '';
        });
      }
    });
}

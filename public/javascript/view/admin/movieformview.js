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
    window.location.assign('/dashboard/movies');
  }, 3500);
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
    window.setTimeout(() => window.location.reload(), 3500);
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
// export function getLinks() {
//   // const link480 = document.getElementById('movie-480-link').value;
//   const {
//     value: l480,
//     dataset: { link: l480Old, linkId: l480Id },
//   } = document.getElementById('movie-480-link');

//   // const link720 = document.getElementById('movie-720-link').value;
//   const {
//     value: l720,
//     dataset: { link: l720Old, linkId: l720Id },
//   } = document.getElementById('movie-720-link');

//   // const link1080 = document.getElementById('movie-1080-link').value;
//   const {
//     value: l1080,
//     dataset: { link: l1080Old, linkId: l1080Id },
//   } = document.getElementById('movie-1080-link');

//   // const linkOther = document.getElementById('movie-other-link').value;
//   const {
//     value: l1,
//     dataset: { link: l1Old, linkId: l1Id },
//   } = document.getElementById('movie-other-link');

//   // const subtitle = document.getElementById('movie-subtitle-link').value;
//   const {
//     value: l10000,
//     dataset: { link: l10000Old, linkId: l10000Id },
//   } = document.getElementById('movie-subtitle-link');

//   const links = [
//     { link: l480, resolution: 480, old: l480Old, id: l480Id },
//     { link: l720, resolution: 720, old: l720Old, id: l720Id },
//     { link: l1080, resolution: 1080, old: l1080Old, id: l1080Id },
//     { link: l1, resolution: 1, old: l1Old, id: l1Id },
//     { link: l10000, resolution: 10000, old: l10000Old, id: l10000Id },
//   ];
//   // const validLinks = links.filter((link) => link.link.length);
//   return links;
// }

export function getLinkData() {
  const resolution = document.getElementById('link-resolution').value;
  const link = document.getElementById('link-link').value;
  const title = document.getElementById('link-title').value;

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
      // console.log(linkId, movieId);
      // return;
      if (!linkId) {
        return controlCreateLink(movieId, 'link-btn');
      }

      // return console.log('👉', linkId, gameId);
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
        document.getElementById('link-title').value = title;

        utils.openPopup('create-link-popup', () => {
          form.dataset.linkId = '';
          document.getElementById('link-resolution').dataset.value = '';
          document.getElementById('link-link').value = '';
          document.getElementById('link-title').value = '';
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

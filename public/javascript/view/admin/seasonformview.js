import * as utils from '../../utils/utils.js';

// ================== RENDERERS ===============
export const displayError = utils.displayError;

//
export function renderCreate(data, action, btnId) {
  if (!data) {
    utils.stopRotateBtn(btnId);
    return utils.alertResponse(
      'failed creating/updating or could not display results - try find on parent Tv Serie page',
      6,
      'failed'
    );
  }

  utils.alertResponse(`Season - ${data.title || ''} - has been ${action}`);
  utils.stopRotateBtn(btnId);

  window.setTimeout(() => {
    window.location.assign(`/dashboard/updateserie/${data.serie}`);
  }, 1000);
}

//
export function renderCreateEpisode(data, action, btnId) {
  if (!data) {
    utils.stopRotateBtn(btnId);
    return utils.alertResponse(
      'failed creating/updating or could not display results - try reloading this page',
      6,
      'failed'
    );
  }

  utils.alertResponse(`Episode - ${data.title || data.episode} - has been ${action}`);
  utils.stopRotateBtn(btnId);

  window.setTimeout(() => {
    window.location.assign(`/dashboard/updateepisode/${data.id}`);
  }, 1000);
}

/**
 * render response after creating or updating game
 * @param {Object} data response object (deleted game)
 * @returns null - break action
 */
export function renderDeleteEpisode(data, btn) {
  if (!data) {
    utils.alertResponse('failed deleting or could not display results, am reloading', 6, 'failed');
    utils.stopRotateBtn(btn);
    return window.setTimeout(() => window.location.reload(), 6500);
  }
  utils.alertResponse('Episode has been deleted successfully');
  utils.stopRotateBtn(btn);

  utils.closePopup('delete-episode-popup', () => window.location.reload());
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
// ================== GETTERS =================
export function getSeasonData() {
  const title = document.getElementById('season-title').value;
  const portrait = document.getElementById('season-image-portrait').value;
  const landscape = document.getElementById('season-image-landscape').value;
  const description = document.getElementById('season-description').value;

  const releasedDate = document.getElementById('season-date').value;
  const number = document.getElementById('season-number').value;

  const data = { title, portrait, landscape, description, number, releasedDate, season: number };
  return data;
}

//
export function getEpisodeData() {
  const title = document.getElementById('episode-title').value;
  const episode = document.getElementById('episode-episode').value;

  return { title, episode };
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
// ================== HANDLERS ================
export function handleCreate(controlCreate, controlUpdate) {
  const form = document.getElementById('create-season');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = 'create-season-btn';
      utils.rotateBtn(btn);
      const { seasonId, serieId } = form.dataset;

      if (seasonId) return controlUpdate(seasonId, btn);
      controlCreate(serieId, btn);
    });
}

//
export function handleCreateEpisode(controlCreateEpisode, controlUpdateEpisode) {
  const form = document.getElementById('create-episode');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = 'create-episode-btn';
      utils.rotateBtn(btn);

      const { seasonId, episodeId } = form.dataset;

      if (episodeId) return controlUpdateEpisode(episodeId, btn);
      controlCreateEpisode(seasonId, btn);
    });
}

export function handleDeleteEpisode(controlDeleteEpisode) {
  const form = document.getElementById('delete-episode');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const { episodeId } = form.dataset;
      const btn = 'delete-episode-btn';

      controlDeleteEpisode(episodeId, btn);
    });
}

//
export function handleCreateLink(controlCreateLink, controlUpdateLink) {
  const form = document.getElementById('create-link');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      utils.rotateBtn('link-btn');
      const { linkId, episodeId } = form.dataset;
      if (!linkId) {
        return controlCreateLink(episodeId, 'link-btn');
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

/*





*/
// =================== INITIALIZER ============
export function initializer() {
  manageEpisodesPopup();
  manageLinkPopup();

  const episodeLinkBtn = document.getElementById('add-episode-link');

  // displaying popup on for creating movie link
  episodeLinkBtn &&
    episodeLinkBtn.addEventListener('click', (e) => {
      utils.fillSelects('link-resolution', 'resolutions');
      utils.fillSelects('link-title', 'titles');
      utils.openPopup('create-link-popup');
    });
}

/*





*/
// =================== NON EXPORTING FUNTIONS =

/** display popup for creating links or deleting links */
function manageEpisodesPopup() {
  const cover = document.getElementById('season-episodes');
  const form = document.getElementById('create-episode');
  const deleteForm = document.getElementById('delete-episode');

  cover &&
    cover.addEventListener('click', (e) => {
      const { target } = e;

      // when delete button is clicked
      if (target.classList.contains('delete-episode-btn')) {
        // getting the whole episode data
        const card = target.closest('.episodelink-card');
        // getting links out of the episodes
        const { episodeId } = card.dataset;
        deleteForm.dataset.episodeId = episodeId;

        utils.openPopup('delete-episode-popup', () => {
          deleteForm.dataset.episodeId = '';
        });
      }
    });
}

/** display popup for creating links or deleting links */
function manageLinkPopup() {
  const cover = document.getElementById('episode-links');
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
          document.getElementById('link-link').value = '';
          document.getElementById('link-title').dataset.value = '';
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

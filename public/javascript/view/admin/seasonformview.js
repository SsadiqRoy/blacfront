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
  }, 3500);
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

  utils.alertResponse(`Episode - ${data.title || ''} - has been ${action}`);
  utils.stopRotateBtn(btnId);

  window.setTimeout(() => {
    window.location.reload();
  }, 3500);
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
//

//

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

export function getLinks() {
  const {
    value: l480,
    dataset: { link: l480Old, linkId: l480Id },
  } = document.getElementById('episode-480-link');

  // const link720 = document.getElementById('episode-720-link').value;
  const {
    value: l720,
    dataset: { link: l720Old, linkId: l720Id },
  } = document.getElementById('episode-720-link');

  // const link1080 = document.getElementById('episode-1080-link').value;
  const {
    value: l1080,
    dataset: { link: l1080Old, linkId: l1080Id },
  } = document.getElementById('episode-1080-link');

  // const linkOther = document.getElementById('episode-other-link').value;
  const {
    value: l1,
    dataset: { link: l1Old, linkId: l1Id },
  } = document.getElementById('episode-other-link');

  // const subtitle = document.getElementById('episode-subtitle-link').value;
  const {
    value: l10000,
    dataset: { link: l10000Old, linkId: l10000Id },
  } = document.getElementById('episode-subtitle-link');

  const links = [
    { link: l480, resolution: 480, old: l480Old, id: l480Id },
    { link: l720, resolution: 720, old: l720Old, id: l720Id },
    { link: l1080, resolution: 1080, old: l1080Old, id: l1080Id },
    { link: l1, resolution: 1, old: l1Old, id: l1Id },
    { link: l10000, resolution: 10000, old: l10000Old, id: l10000Id },
  ];
  // const validLinks = links.filter((link) => link.link.length);
  return links;
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

/*





*/
// =================== INITIALIZER ============
export function initializer() {
  const btn = document.getElementById('add-episode');

  manageEpisodesPopup();

  btn &&
    btn.addEventListener('click', (e) => {
      utils.openPopup('create-episode-popup', clearEpisodeData);
    });
}

/*





*/
// =================== NON EXPORTING FUNTIONS =
function clearEpisodeData() {
  document.getElementById('create-episode').dataset.episodeId = '';
  document.getElementById('episode-title').value = '';
  document.getElementById('episode-episode').value = '';

  const l480 = document.getElementById('episode-480-link');
  l480.value = '';
  l480.dataset.linkId = '';
  l480.dataset.link = '';

  const l720 = document.getElementById('episode-720-link');
  l720.value = '';
  l720.dataset.linkId = '';
  l720.dataset.link = '';

  const l1080 = document.getElementById('episode-1080-link');
  l1080.value = '';
  l1080.dataset.linkId = '';
  l1080.dataset.link = '';

  const lother = document.getElementById('episode-other-link');
  lother.value = '';
  lother.dataset.linkId = '';
  lother.dataset.link = '';

  const lsubtitle = document.getElementById('episode-subtitle-link');
  lsubtitle.value = '';
  lsubtitle.dataset.linkId = '';
  lsubtitle.dataset.link = '';
}

/** display popup for creating links or deleting links */
function manageEpisodesPopup() {
  const cover = document.getElementById('season-episodes');
  const form = document.getElementById('create-episode');
  const deleteForm = document.getElementById('delete-episode');

  cover &&
    cover.addEventListener('click', (e) => {
      const { target } = e;

      // when edite button is clicked
      if (target.classList.contains('edit-episode-btn')) {
        // getting the whole episode data
        const card = target.closest('.episodelink-card');
        const { episode: e } = card.dataset;
        const episode = JSON.parse(e);
        // getting links out of the episodes
        const { Links: links } = episode;

        // setting the popup form episode id to dataset object
        form.dataset.episodeId = episode.id;
        document.getElementById('episode-title').value = episode.title;
        document.getElementById('episode-episode').value = episode.episode;

        // looping through links and setting the dataset and value to their various elements
        links.forEach((link) => {
          // knowing the type of link to be able to select its input by id
          let resolution = link.resolution === 1 ? 'other' : link.resolution;
          resolution = link.resolution === 10000 ? 'subtitle' : resolution;
          const id = `episode-${resolution}-link`;
          const input = document.getElementById(id);

          // resseting dataset and filling in values
          input.value = link.link;
          input.dataset.linkId = link.id;
          input.dataset.link = link.link;
        });

        utils.openPopup('create-episode-popup', clearEpisodeData);
      }

      // when delete button is clicked
      if (target.classList.contains('delete-episode-btn')) {
        // getting the whole episode data
        const card = target.closest('.episodelink-card');
        const { episode: e } = card.dataset;
        const episode = JSON.parse(e);
        // getting links out of the episodes
        const { id: episodeId } = episode;
        deleteForm.dataset.episodeId = episodeId;

        utils.openPopup('delete-episode-popup', () => {
          deleteForm.dataset.episodeId = '';
        });
      }
    });
}

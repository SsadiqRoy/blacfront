import * as utils from '../../utils/utils.js';

// ================== RENDERERS ===============
export const displayError = utils.displayError;

//
export function renderCreated(data, action, btnId) {
  if (!data) {
    utils.stopRotateBtn(btnId);
    return utils.alertResponse(
      'failed creating/updating or could not display results - try find on series page',
      6,
      'failed'
    );
  }

  utils.alertResponse(`Tv serie - ${data.title} - has been ${action}`);
  utils.stopRotateBtn(btnId);

  window.setTimeout(() => {
    window.location.assign(`/dashboard/updateserie/${data.id}`);
  }, 3500);
}

//
//
export function renderDeleteSeason(data, btnId) {
  if (!data) {
    utils.stopRotateBtn(btnId);
    return utils.alertResponse(
      'failed creating/updating or could not display results - try find on series page',
      6,
      'failed'
    );
  }

  utils.alertResponse(`Season has been deleted`);
  utils.stopRotateBtn(btnId);

  window.setTimeout(() => {
    window.location.reload();
  }, 3500);
}

/*





*/
// ================== GETTERS =================
export function getSerieData() {
  const title = document.getElementById('serie-title').value;
  const portrait = document.getElementById('serie-image-portrait').value;
  const landscape = document.getElementById('serie-image-landscape').value;
  const description = document.getElementById('serie-description').value;
  const tags = document.getElementById('serie-tags').value.split(',');
  const keywords = document.getElementById('serie-keywords').value.split(',');
  const companies = document.getElementById('serie-companies').value.split(',');
  const actors = document.getElementById('serie-actors').value.split(',');
  const charactors = document.getElementById('serie-charactors').value.split(',');
  const directors = document.getElementById('serie-directors').value.split(',');
  const company = document.getElementById('serie-company').value;
  const releasedDate = document.getElementById('serie-date').value;
  const country = document.getElementById('serie-country').value;
  const rating = document.getElementById('serie-rating').value;
  const status = document.getElementById('serie-status').value;

  let data = { title, portrait, landscape, description, tags, keywords, companies, status };
  data = { ...data, actors, directors, company, releasedDate, country, rating, charactors };
  return data;
}

/*





*/
// ================== HANDLERS ================
export function handleCreate(controlCreate, controlUpdate) {
  const form = document.getElementById('create-serie');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      utils.rotateBtn('create-serie-btn');
      const { serieId } = form.dataset;

      if (serieId) return controlUpdate(serieId, 'create-serie-btn');
      controlCreate('create-serie-btn');
    });
}

//
export function handleDeleteSeason(controlDeleteSeason) {
  const form = document.getElementById('delete-season');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { seasonId } = form.dataset;
      const btnId = 'delete-season-btn';
      controlDeleteSeason(seasonId, btnId);
    });
}

/*





*/
// =================== INITIALIZER ============
export function initializer() {
  utils.fillSelects('serie-country', 'countries');
  utils.fillSelects('serie-status', 'serieStatus');
  manageSeasonPopup();
}

/*





*/
// =================== NON EXPORTING FUNTIONS =
function manageSeasonPopup() {
  const cover = document.getElementById('seasons');
  const form = document.getElementById('delete-season');

  cover &&
    cover.addEventListener('click', (e) => {
      const { target } = e;
      if (target.classList.contains('delete-item')) {
        const card = target.closest('.season-card');
        const { seasonId } = card.dataset;

        form.dataset.seasonId = seasonId;
        utils.openPopup('delete-season-popup', () => {
          form.dataset.seasonId = '';
        });
      }
    });
}

import * as utils from '../../utils/utils.js';

// ================= RENDERRES =============
export const displayError = utils.displayError;

/**
 * render response after creating or updating game
 * @param {Object} data response object (game)
 * @param {String} action updated or created
 * @returns null - break action
 */
export function renderCreated(data, action, btnId) {
  if (!data) {
    utils.stopRotateBtn(btnId);
    return utils.alertResponse('failed creating or could not display results - try find on games page', 6, 'failed');
  }

  utils.alertResponse(`${data.title} has been ${action}`);
  utils.stopRotateBtn(btnId);

  window.setTimeout(() => {
    if (action === 'created') return window.location.assign(`/dashboard/updategame/${data.id}`);
    window.location.assign(`/dashboard/updategame/${data.id}`);
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

  utils.alertResponse(`part ${data.part} has been ${action}`);
  utils.stopRotateBtn(btnId);

  // document.getElementById('create-gamepart').gamepartId = '';
  // document.getElementById('gamepart-part').value = '';
  // document.getElementById('gamepart-link').value = '';
  utils.closePopup('create-gamepart-popup', () => window.location.reload());
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

  utils.closePopup('delete-gamepart-popup', () => window.location.reload());
}

/**
 * render response after creating or updating game
 * @param {Object} data response object (game)
 * @returns null - break action
 */
export function renderSaveAbout(data, btnId) {
  if (!data) {
    utils.alertResponse('failed saving about or could not display results - try find on games page', 6, 'failed');
    utils.stopRotateBtn(btnId);
    return;
  }

  utils.alertResponse(`The about has been saved`);
  utils.stopRotateBtn(btnId);

  window.setTimeout(() => {
    window.location.assign('/dashboard/games');
  }, 1000);
}

/*





*/
// ================== GETTERS =============
export function getGameData() {
  const title = document.getElementById('game-title').value;
  const portrait = document.getElementById('game-image-portrait').value;
  const landscape = document.getElementById('game-image-landscape').value;
  const description = document.getElementById('game-description').value;
  const tags = document.getElementById('game-tags').value.split(',');
  const keywords = document.getElementById('game-keywords').value.split(',');
  const companies = document.getElementById('game-companies').value.split(',');
  const company = document.getElementById('game-company').value;
  const releasedDate = document.getElementById('game-date').value;
  const country = document.getElementById('game-country').value;
  const rating = document.getElementById('game-rating').value;

  let data = { title, portrait, landscape, description, tags, keywords, companies };
  data = { ...data, company, releasedDate, country, rating };
  return data;
}

//
export function getLinkData() {
  const part = document.getElementById('gamepart-part').value;
  const link = document.getElementById('gamepart-link').value;
  const title = document.getElementById('gamepart-title').value;
  // const { gameId } = document.getElementById('create-gamepart').dataset;

  return { title, part, link };
}

//
export function getAboutData() {
  const about = tinymce.get('game-about');
  const content = about.getContent();

  return { about: content };
}

/*





*/
// =================== HANDLERS ==============
export function handleCreate(controlCreate, controlUpdate) {
  const form = document.getElementById('create-game');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      utils.rotateBtn('game-btn');
      const { gameId } = form.dataset;

      if (!gameId) controlCreate('game-btn');
      else controlUpdate(gameId, 'game-btn');
    });
}

//
export function handleCreateLink(controlCreateLink, controlUpdateLink) {
  const form = document.getElementById('create-gamepart');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      utils.rotateBtn('gamepart-btn');
      const { gamepartId, gameId } = form.dataset;

      if (!gamepartId) {
        return controlCreateLink(gameId, 'gamepart-btn');
      }

      controlUpdateLink(gamepartId, 'gamepart-btn');
    });
}

//
export function handleDeleteLink(controlDeleteLink) {
  const form = document.getElementById('delete-gamepart');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { gamepartId } = form.dataset;

      if (!gamepartId) return;
      utils.rotateBtn('delete-gamepart-btn');
      controlDeleteLink(gamepartId, 'delete-gamepart');
    });
}

//
export function handleSaveAbout(controlSaveAbout) {
  const btn = document.getElementById('about-game-btn');

  btn &&
    btn.addEventListener('click', (e) => {
      const { gameId } = btn.dataset;

      utils.rotateBtn('about-game-btn');
      controlSaveAbout(gameId, 'about-game-btn');
    });
}

// =================== INITIALIZER ===========
export function initilizer() {
  utils.fillSelects('game-country', 'countries');
  const gamelinkBtn = document.getElementById('add-game-link');

  // displaying popup on for creating game link
  gamelinkBtn &&
    gamelinkBtn.addEventListener('click', (e) => {
      utils.openPopup('create-gamepart-popup');
    });

  editor();
  manageLinkPopup();
}

/*







*/
// ====================== NON EXPORTING FUNCTOINS =======
/** display popup for creating links or deleting links */
function manageLinkPopup() {
  const cover = document.getElementById('game-links');
  const form = document.getElementById('create-gamepart');
  const deleteForm = document.getElementById('delete-gamepart');

  cover &&
    cover.addEventListener('click', (e) => {
      // when the card icon is clicked
      const { target } = e;
      const card = target.closest('.gamelink-card');
      const { linkId, part, link, title } = card.dataset;

      // when the edit button is clickd
      if (target.classList.contains('edit-link-btn')) {
        form.dataset.gamepartId = linkId;
        document.getElementById('gamepart-part').value = part;
        document.getElementById('gamepart-link').value = link;
        document.getElementById('gamepart-title').value = title;

        utils.openPopup('create-gamepart-popup', () => {
          form.dataset.gamepartId = '';
          document.getElementById('gamepart-part').value = '';
          document.getElementById('gamepart-link').value = '';
          document.getElementById('gamepart-title').value = '';
        });
      }

      // when the delect icon is clicked
      if (target.classList.contains('delete-link-btn')) {
        deleteForm.dataset.gamepartId = linkId;
        utils.openPopup('delete-gamepart-popup', () => {
          deleteForm.dataset.gamepartId = '';
        });
      }
    });
}

//
/** initiazes tinymce editor on game about page */
function editor() {
  const about = document.getElementById('game-about');
  if (!about) return;
  tinymce.init({
    selector: '#game-about',
    plugins: [
      'advlist autolink link lists charmap preview hr anchor pagebreak',
      'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime nonbreaking',
      'table emoticons template paste help',
    ],
    toolbar:
      'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist outdent indent | link | fullscreen | ' +
      'forecolor backcolor emoticons | help',
    menu: {
      favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' },
    },
    menubar: 'favs file edit view insert format tools table help',
    // skin: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oxide-dark' : 'oxide'),
    // content_css: (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'),
    images_upload_url: 'http://localhost:3000/api/v1/eventeos/abouts/uploadDataImage',
    automatic_uploads: false,
    images_upload_credentials: true,
    // content_css: 'css/content.css'
  });
}

import * as utils from '../../utils/utils.js';
import * as ind from '../../utils/independent.js';

// ================= RENDERES ===========
export const displayError = utils.displayError;

/**
 * render response after creating or updating game
 * @param {Object} data response object (deleted game)
 * @returns null - break action
 */
export function renderDelete(data, btn) {
  if (!data) {
    utils.alertResponse('failed deleting or could not display results, am reloading', 6, 'failed');
    utils.stopRotateBtn(btn);
    return window.setTimeout(() => window.location.reload(), 6500);
  }
  utils.alertResponse(`Game - ${data.data.title} - has been deleted successfully`);
  utils.stopRotateBtn(btn);

  const id = data.data.id;
  const card = document.querySelector(`[data-card-id="${id}"`);
  card.parentElement.removeChild(card);

  utils.closePopup('delete-game-popup');
}

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========

export function handleDelete(controlDelete) {
  const form = document.getElementById('delete-game');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { cardId } = form.dataset;

      const btn = 'delete-game-btn';
      utils.rotateBtn(btn);

      controlDelete(cardId, btn);
    });
}

/*





  */
// ================== INITIALIZER =========
export function initializer() {
  utils.adminSidebar(), utils.adminSearchBar();
  managePopups();
  ind.showMore('game', 'items-container', 'dbMovieCard');
  ind.searchItem('game', 'items-container', 'dbMovieCard');
  ind.logout();
}

//

//
/*





  */
// ================== NON EXPORTING FUNCTIONS =
function managePopups() {
  const container = document.getElementById('main-container');
  const form = document.getElementById('delete-game');

  container &&
    container.addEventListener('click', (e) => {
      const { target } = e;
      if (target.classList.contains('delete-item')) {
        const card = target.closest('.dbmovie-card');
        const { cardId } = card.dataset;

        form.dataset.cardId = cardId;
        utils.openPopup('delete-game-popup', () => {
          form.dataset.cardId = '';
        });
      }
    });
}

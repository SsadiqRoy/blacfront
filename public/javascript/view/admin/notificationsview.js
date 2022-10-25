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
  utils.alertResponse(`Notification has been deleted successfully`);
  utils.stopRotateBtn(btn);

  const id = data.data.id;
  const card = document.querySelector(`[data-notification-id="${id}"`);
  card.parentElement.removeChild(card);

  utils.closePopup('delete-notification-popup');
}

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========

export function handleDelete(controlDelete) {
  const form = document.getElementById('delete-notification');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { notificationId } = form.dataset;

      const btn = 'delete-notification-btn';
      utils.rotateBtn(btn);

      controlDelete(notificationId, btn);
    });
}

/*





  */
// ================== INITIALIZER =========
export function initializer() {
  utils.adminSidebar(), utils.adminSearchBar();
  managePopups();
  ind.showMore('notification', 'items-container', 'notificationCard');
}

/*





  */
// ================== NON EXPORTING FUNCTIONS =
function managePopups() {
  const container = document.getElementById('main-container');
  const form = document.getElementById('delete-notification');

  container &&
    container.addEventListener('click', (e) => {
      const { target } = e;
      if (target.classList.contains('delete-item')) {
        const card = target.closest('.notification-card');
        const { notificationId } = card.dataset;

        form.dataset.notificationId = notificationId;
        utils.openPopup('delete-notification-popup', () => {
          form.dataset.notificationId = '';
        });
      }
    });
}

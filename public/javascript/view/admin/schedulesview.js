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
  utils.alertResponse(`Schedule has been deleted successfully`);
  utils.stopRotateBtn(btn);

  const id = data.data.id;
  const card = document.querySelector(`[data-schedule-id="${id}"`);
  card.parentElement.removeChild(card);

  utils.closePopup('delete-schedule-popup');
}

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========

export function handleDelete(controlDelete) {
  const form = document.getElementById('delete-schedule');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { scheduleId } = form.dataset;

      const btn = 'delete-schedule-btn';
      utils.rotateBtn(btn);

      controlDelete(scheduleId, btn);
    });
}

/*





  */
// ================== INITIALIZER =========
export function initializer() {
  utils.adminSidebar(), utils.adminSearchBar();
  managePopups();
  ind.showMore('schedule', 'items-container', 'scheduleCard');
  ind.logout();
}

/*





  */
// ================== NON EXPORTING FUNCTIONS =
function managePopups() {
  const container = document.getElementById('main-container');
  const form = document.getElementById('delete-schedule');

  container &&
    container.addEventListener('click', (e) => {
      const { target } = e;
      if (target.classList.contains('delete-item')) {
        const card = target.closest('.schedule-card');
        const { scheduleId } = card.dataset;

        form.dataset.scheduleId = scheduleId;
        utils.openPopup('delete-schedule-popup', () => {
          form.dataset.scheduleId = '';
        });
      }
    });
}

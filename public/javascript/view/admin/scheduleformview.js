import * as utils from '../../utils/utils.js';

// ================= RENDERES ===========
export const displayError = utils.displayError;

//
export function renderCreated(data, action, btnId) {
  if (!data) {
    utils.stopRotateBtn(btnId);
    return utils.alertResponse(
      'failed creating or could not display results - try find on schedules page',
      6,
      'failed'
    );
  }

  utils.alertResponse(`Schedule - ${new Date(data.date).toLocaleString()} - has been ${action}`);
  utils.stopRotateBtn(btnId);

  window.setTimeout(() => {
    window.location.assign('/dashboard/schedules');
  }, 3500);
}

/*





*/
// ================== GETTERS ============
export function getScheduleData() {
  const date = document.getElementById('schedule-date').value;
  const message = document.getElementById('schedule-message').value;
  const { user } = document.getElementById('create-schedule').dataset;

  return { date, message, user };
}

/*





*/
// =================== HANDLERS ==========
export function handleCreate(controlCreate, controlUpdate) {
  const form = document.getElementById('create-schedule');

  form &&
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      utils.rotateBtn('create-schedule-btn');
      const { scheduleId } = form.dataset;

      if (scheduleId) return controlUpdate(scheduleId, 'create-schedule-btn');
      controlCreate('create-schedule-btn');
    });
}

/*





*/
// ================== INITIALIZER =========

/*





*/
// ================== NON EXPORTING FUNCTIONS =

// ================= RENDERES ===========

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========

/*





  */
// ================== INITIALIZER =========

/*





  */
// ================== NON EXPORTING FUNCTIONS =

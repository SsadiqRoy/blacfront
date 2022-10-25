import * as view from '../../view/admin/schedulesview.js';
import * as model from '../../model/model.js';

//
async function controlDelete(scheduleId, btnId) {
  try {
    const res = await model.deletefull(`/schedules/${scheduleId}`);
    console.log(res);
    view.renderDelete(res, btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

async function init() {
  view.initializer();
  view.handleDelete(controlDelete);
}
init();

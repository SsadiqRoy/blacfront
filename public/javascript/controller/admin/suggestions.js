import * as view from '../../view/admin/suggestionsview.js';
import * as model from '../../model/model.js';

//
async function controlDelete(notificationId, btnId) {
  try {
    const res = await model.deletefull(`/suggestions/${notificationId}`);

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

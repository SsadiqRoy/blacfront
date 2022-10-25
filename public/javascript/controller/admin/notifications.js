import * as view from '../../view/admin/notificationsview.js';
import * as model from '../../model/model.js';

//
async function controlDelete(notificationId, btnId) {
  try {
    console.log(notificationId);
    const res = await model.deletefull(`/notifications/${notificationId}`);

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

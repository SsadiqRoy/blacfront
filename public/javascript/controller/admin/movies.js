import * as view from '../../view/admin/moviesview.js';
import * as model from '../../model/model.js';

//
async function controlDelete(cardId, btnId) {
  try {
    const res = await model.deletefull(`/movies/${cardId}`);

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

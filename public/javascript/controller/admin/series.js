import * as view from '../../view/admin/seriesview.js';
import * as model from '../../model/model.js';

//
async function controlDelete(cardId, btnId) {
  try {
    console.log(cardId);
    const res = await model.deletefull(`/series/${cardId}`);

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

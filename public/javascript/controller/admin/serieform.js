import * as view from '../../view/admin/serieformview.js';
import * as model from '../../model/model.js';

// ================== CONTROLLERS CALLED IN VIEW ==

async function controlCreate(btnId) {
  try {
    const serieData = view.getSerieData();
    const serie = await model.post('/series/create', serieData);
    // const { id } = serie;
    // await saveLinks(id);

    view.renderCreated(serie, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlUpdate(serieId, btnId) {
  try {
    const serieData = view.getSerieData();
    const serie = await model.patch(`/series/${serieId}`, serieData);
    // await updateLinks();

    view.renderCreated(serie, 'updated', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlDeleteSeason(seasonId, btnId) {
  try {
    const res = await model.deletefull(`/seasons/${seasonId}`);
    view.renderDeleteSeason(res, btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

/*





*/
// =================== NINITIALIZER ===============

async function init() {
  view.initializer();
  view.handleCreate(controlCreate, controlUpdate);
  view.handleDeleteSeason(controlDeleteSeason);
}
init();

/*





*/
// ================= CONTROLLERS CALLED IN OTHER CONTROLLERS

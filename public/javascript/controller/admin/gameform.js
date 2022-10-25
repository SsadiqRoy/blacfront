import * as view from '../../view/admin/gameformview.js';
import * as model from '../../model/model.js';

//
async function controlCreate(btnId) {
  try {
    const data = view.getGameData();
    const res = await model.post('/games/create', data);

    view.renderCreated(res, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

async function controlUpdate(gameId, btnId) {
  try {
    const data = view.getGameData();
    const res = await model.patch(`/games/${gameId}`, data);

    view.renderCreated(res, 'updated', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlCreateLink(gameId, btnId) {
  try {
    if (!gameId) throw new Error('First save the game and update with the part links');

    const data = view.getLinkData();
    data.game = gameId;
    console.log(data);
    // return;
    const res = await model.post('/links/create', data);

    view.renderCreateLink(res, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlUpdateLink(linkId, btnId) {
  try {
    const data = view.getLinkData();
    // return console.log(data);
    const res = await model.patch(`/links/${linkId}`, data);

    view.renderCreateLink(res, 'updated', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlDeleteLink(linkId, btnId) {
  try {
    const res = await model.deletefull(`/links/${linkId}`);

    view.renderDeleteLInk(res, btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlSaveAbout(gameId, btnId) {
  try {
    const data = view.getAboutData();

    // return console.log(data, gameId);
    const res = await model.patch(`/games/${gameId}`, data);
    view.renderSaveAbout(res, btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

async function init() {
  view.initilizer();
  view.handleCreate(controlCreate, controlUpdate);
  view.handleCreateLink(controlCreateLink, controlUpdateLink);
  view.handleDeleteLink(controlDeleteLink);
  view.handleSaveAbout(controlSaveAbout);
}
init();

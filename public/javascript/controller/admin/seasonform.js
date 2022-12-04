import * as view from '../../view/admin/seasonformview.js';
import * as model from '../../model/model.js';

// ================== CONTROLLERS CALLED IN VIEW ==

async function controlCreate(serieId, btnId) {
  try {
    const data = view.getSeasonData();
    data.serie = serieId || null;
    const season = await model.post('/seasons/create', data);
    await model.patch(`/series/${serieId}`, { updatedAt: season.releasedDate });

    view.renderCreate(season, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlUpdate(seasonId, btnId) {
  try {
    const data = view.getSeasonData();
    const season = await model.patch(`/seasons/${seasonId}`, data);

    view.renderCreate(season, 'updated', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlCreateEpisode(seasonId, btnId) {
  try {
    if (!seasonId) throw new Error('First save the Season and create the episodes later');

    const data = view.getEpisodeData();
    data.season = seasonId;

    const episode = await model.post('/episodes/create', data);

    view.renderCreateEpisode(episode, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlUpdateEpisode(episodeId, btnId) {
  try {
    const data = view.getEpisodeData();

    const res = await model.patch(`/episodes/${episodeId}`, data);

    view.renderCreateEpisode(res, 'updated', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlDeleteEpisode(episodeId, btnId) {
  try {
    const res = await model.deletefull(`/episodes/${episodeId}`);

    view.renderDeleteEpisode(res, btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlCreateLink(episodeId, btnId) {
  try {
    if (!episodeId) throw new Error('First save the movie and update with the part links');

    const data = view.getLinkData();
    data.episode = episodeId;

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

    let res;
    if (data.link) res = await model.patch(`/links/${linkId}`, data);
    if (!data.link) res = await model.deletefull(`/links/${linkId}`);

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
/*





*/
// =================== NINITIALIZER ===============

async function init() {
  view.initializer();
  view.handleCreate(controlCreate, controlUpdate);
  view.handleCreateEpisode(controlCreateEpisode, controlUpdateEpisode);
  view.handleDeleteEpisode(controlDeleteEpisode);
  view.handleCreateLink(controlCreateLink, controlUpdateLink);
  view.handleDeleteLink(controlDeleteLink);
}
init();

/*





*/
// ================= CONTROLLERS CALLED IN OTHER CONTROLLERS

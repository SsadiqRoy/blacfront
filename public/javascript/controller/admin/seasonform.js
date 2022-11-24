import * as view from '../../view/admin/seasonformview.js';
import * as model from '../../model/model.js';

// ================== CONTROLLERS CALLED IN VIEW ==

async function controlCreate(serieId, btnId) {
  try {
    const data = view.getSeasonData();
    data.serie = serieId || null;
    const season = await model.post('/seasons/create', data);
    // const { id } = season;
    // await saveLinks(id);

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

    // console.log(data);
    // return;
    const episode = await model.post('/episodes/create', data);
    const { id } = episode;
    await saveLinks(id);

    view.renderCreateEpisode(episode, 'created', btnId);
  } catch (error) {
    // console.log(error);
    view.displayError(error, btnId, btnId);
  }
}

//
async function controlUpdateEpisode(episodeId, btnId) {
  try {
    const data = view.getEpisodeData();
    // console.log(episodeId);
    const res = await model.patch(`/episodes/${episodeId}`, data);
    // console.log(res);
    await updateLinks(episodeId);

    view.renderCreateEpisode(res, 'updated', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlDeleteEpisode(episodeId, btnId) {
  try {
    // console.log(episodeId);
    const res = await model.deletefull(`/episodes/${episodeId}`);

    view.renderDeleteEpisode(res, btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function saveLinks(episodeId) {
  const links = view.getLinks();

  links.forEach(async (link) => {
    if (link.link) {
      link.episode = episodeId;
      await model.post('/links/create', link);
    }
  });
}

//
async function updateLinks(episodeId) {
  const links = view.getLinks();
  // console.log(links);

  links.forEach(async (link) => {
    // console.log('link', link);
    if (link.link && link.link !== link.old) {
      // console.log(`/links/${link.id}`);
      await model.patch(`/links/${link.id}`, link);
    }
    if (link.old && !link.link) {
      await model.deletefull(`/links/${link.id}`);
    }
    if (link.link && !link.id) {
      link.episode = episodeId;
      const re = await model.post(`/links/create`, link);
      // console.log(re);
    }
  });
}

/*





*/
// =================== NINITIALIZER ===============

async function init() {
  view.initializer();
  view.handleCreate(controlCreate, controlUpdate);
  view.handleCreateEpisode(controlCreateEpisode, controlUpdateEpisode);
  view.handleDeleteEpisode(controlDeleteEpisode);
}
init();

/*





*/
// ================= CONTROLLERS CALLED IN OTHER CONTROLLERS

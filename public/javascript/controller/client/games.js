import * as view from '../../view/client/gamesview.js';
import * as model from '../../model/model.js';

async function controlLoadContent(query) {
  try {
    const response = await model.getfull(`/games?fields=title,landscape,rating,id${query}`);
    view.renderLoadContent({ response, containerId: 'content', type: 'game', cardName: 'gameCard' });
  } catch (error) {
    console.log(error);
  }
}

async function controlLoadMore(query) {
  try {
    const response = await model.getfull(`/games${query}`);
    view.renderLoadMore({ response, containerId: 'content', type: 'game', cardName: 'gameCard' });
  } catch (error) {
    console.log(error);
  }
}

async function initializer() {
  view.initializer();
  view.handleLoadContent(controlLoadContent);
  view.handleLoadMore(controlLoadMore);
}
initializer();

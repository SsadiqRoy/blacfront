import * as view from '../../view/client/moviesview.js';
import * as model from '../../model/model.js';

async function controlLoadContent(query) {
  try {
    const response = await model.getfull(`/movies${query}`);
    view.renderLoadContent({ response, containerId: 'content', type: 'movie', cardName: 'movieCard' });
  } catch (error) {
    console.log(error);
  }
}

async function controlLoadMore(query) {
  try {
    const response = await model.getfull(`/movies${query}`);
    view.renderLoadMore({ response, containerId: 'content', type: 'movie', cardName: 'movieCard' });
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

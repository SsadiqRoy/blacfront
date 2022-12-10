import * as view from '../../view/client/homeview.js';
import * as model from '../../model/model.js';

async function controlHeadingSlide() {
  try {
    const response = await model.get(
      '/movies?fields=title,landscape,description,id&limit=10&rating=gte,5.5&order=createdAt,desc'
    );
    view.renderHeadingSlide(response);
  } catch (error) {
    await model.localPost('/write-to-log', error);
    console.log(error);
  }
}

async function fillMovies() {
  try {
    const response = await model.getfull('/movies?fields=title,portrait,rating,id&limit=20&order=releasedDate,desc');
    view.renderFillSliders({ response, containerId: 'first-movies', type: 'movie', cardName: 'movieCard' });

    const res2 = await model.getfull(
      '/movies?fields=title,portrait,rating,id&limit=20&order=releasedDate,desc&rating=gte,5.5'
    );
    view.renderFillSliders({ response: res2, containerId: 'second-movies', type: 'movie', cardName: 'movieCard' });
  } catch (error) {
    console.log(error);
    await model.localPost('/write-to-log', error);
  }
}

async function fillSeries() {
  try {
    const response = await model.getfull('/series?fields=title,portrait,rating,id&limit=20&order=releasedDate,desc');
    view.renderFillSliders({ response, containerId: 'first-series', type: 'serie', cardName: 'movieCard' });

    const res2 = await model.getfull(
      '/series?fields=title,portrait,rating,id&limit=20&order=releasedDate,desc&rating=gte,5.5'
    );
    view.renderFillSliders({ response: res2, containerId: 'second-series', type: 'serie', cardName: 'movieCard' });
  } catch (error) {
    await model.localPost('/write-to-log', error);
    console.log(error);
  }
}

async function fillGames() {
  try {
    const response = await model.getfull('/games?fields=title,landscape,rating,id&limit=20&order=releasedDate,desc');
    view.renderFillSliders({ response, containerId: 'first-games', type: 'game', cardName: 'gameCard' });

    const res2 = await model.getfull(
      '/games?fields=title,landscape,rating,id&limit=20&order=releasedDate,desc&rating=gte,5.5'
    );
    view.renderFillSliders({ response: res2, containerId: 'second-games', type: 'game', cardName: 'gameCard' });
  } catch (error) {
    await model.localPost('/write-to-log', error);
    console.log(error);
  }
}

/*







*/
async function controlFillSliders() {
  controlHeadingSlide();
  fillMovies(), fillSeries(), fillGames();
}

async function initializer() {
  view.initializer();
  view.handleFillSliders(controlFillSliders);
}
initializer();

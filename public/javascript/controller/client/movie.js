import * as view from '../../view/client/movieview.js';
import * as model from '../../model/model.js';

async function controlSuggestions({ In, notIn, text }) {
  try {
    const response = await model.getfull(`/movies?fields=title,portrait,rating,id&limit=12&text=${text}`);
    view.renderFillSuggestions({ response, containerId: 'suggestions', type: 'movie', cardName: 'movieCard' });
  } catch (error) {
    console.log(error);
  }
}

async function initializer() {
  view.initializer();
  view.handleSuggestions(controlSuggestions);
}
initializer();

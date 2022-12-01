import * as view from '../../view/client/serieview.js';
import * as model from '../../model/model.js';

async function controlSuggestions({ In, notIn, text }) {
  try {
    const response = await model.getfull(`/series?fields=title,portrait,rating,id&limit=12&text=${text}`);
    view.renderFillSuggestions({ response, containerId: 'suggestions', type: 'serie', cardName: 'movieCard' });
  } catch (error) {
    console.log(error);
  }
}

async function initializer() {
  view.initializer();
  view.handleSuggestions(controlSuggestions);
}
initializer();

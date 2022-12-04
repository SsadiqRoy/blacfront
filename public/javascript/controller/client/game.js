import * as view from '../../view/client/gameview.js';
import * as model from '../../model/model.js';

async function controlSuggestions({ In, notIn, text }) {
  try {
    const response = await model.getfull(`/games?fields=title,landscape,rating,id&limit=12&text=${text}`);
    view.renderFillSuggestions({ response, containerId: 'suggestions', type: 'game', cardName: 'gameCard' });
  } catch (error) {
    console.log(error);
  }
}

async function initializer() {
  view.initializer();
  view.handleSuggestions(controlSuggestions);
}
initializer();

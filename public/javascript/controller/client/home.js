import * as view from '../../view/client/homeview.js';
import * as model from '../../model/model.js';

async function controlHeadingSlide() {
  try {
    const response = await model.get('/movies?fields=title,landscape,description,id&limit=5&rating=gte,5.5');
    // console.log(response);
    view.renderHeadingSlide(response);
  } catch (error) {
    console.log(error);
  }
}

async function initializer() {
  view.initializer();
  view.handleHeadingSlide(controlHeadingSlide);
}
initializer();

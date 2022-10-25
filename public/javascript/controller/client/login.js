import * as view from '../../view/client/loginview.js';
import * as model from '../../model/model.js';

async function contorlLogin(btn) {
  try {
    const data = view.getUserData();

    const res = await model.patch('/users/log', data);

    view.renderLogin(res);
  } catch (error) {
    view.displayError(error, btn);
  }
}

async function init() {
  view.handleLogin(contorlLogin);
}
init();

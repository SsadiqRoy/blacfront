import * as view from '../../view/client/signupview.js';
import * as model from '../../model/model.js';

async function controlSignup(btnid) {
  try {
    const data = view.getUserData();

    const res = await model.post('/users/signup', data);
    view.renderSignup(res);
  } catch (error) {
    view.displayError(error, btnid);
  }
}

//
async function init() {
  view.handleSignup(controlSignup);
}

init();

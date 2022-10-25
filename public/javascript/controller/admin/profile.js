import * as view from '../../view/admin/profileview.js';
import * as model from '../../model/model.js';

//
async function controlUpdateUser(userId, btnId) {
  try {
    const data = view.getUpdateData();
    const res = await model.patch(`/users/${userId}`, data);
    view.renderUpdated(res);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlChangePassword(userId, btnId) {
  try {
    const data = view.getPasswords();
    const res = await model.patch(`/users/changepassword/${userId}`, data);
    view.renderUpdatedPassword(res);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function init() {
  view.initializer();
  view.handleUpdateUser(controlUpdateUser);
  view.handleChangePassword(controlChangePassword);
}
init();

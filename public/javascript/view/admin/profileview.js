import * as utils from '../../utils/utils.js';

// =============== RENDERRES ===========
export const displayError = utils.displayError;

export function renderUpdated(user) {
  if (!user) {
    utils.alertResponse('update failed or could not display', 3, 'failed');
    utils.stopRotateBtn('update-user-btn');
  }
  utils.alertResponse('Your update has been saved');
  utils.stopRotateBtn('update-user-btn');
}

export function renderUpdatedPassword(user) {
  if (!user) {
    utils.alertResponse('update failed or could not display', 3, 'failed');
    utils.stopRotateBtn('update-password-btn');
  }
  console.log(user);
  utils.alertResponse('Your password has been updated');
  utils.stopRotateBtn('change-password-btn');
}

// =============== GETTERS ==============
export function getUpdateData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  return { name, email };
}

export function getPasswords() {
  const oldPassword = document.getElementById('old-password').value;
  const password = document.getElementById('password').value;

  return { oldPassword, password };
}

// =============== HANDLERS ===========
// updating user data
export function handleUpdateUser(controlUpdateUser) {
  const form = document.getElementById('update-user');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { userId } = form.dataset;
    utils.rotateBtn('update-user-btn');
    controlUpdateUser(userId, 'update-user-btn');
  });
}

// changing user password
export function handleChangePassword(controlChangePassword) {
  const form = document.getElementById('change-password');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { userId } = form.dataset;
    utils.rotateBtn('change-password-btn');
    controlChangePassword(userId, 'change-password-btn');
  });
}

// ======================== INITIALIZER ==============
export function initializer() {
  utils.adminSidebar(), utils.adminSearchBar();
}

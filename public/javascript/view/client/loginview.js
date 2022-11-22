import * as utils from '../../utils/utils.js';

export const displayError = utils.displayError;

export function renderLogin(data) {
  if (!data) throw new Error('login data not found');
  utils.alertResponse(`welcome back, ${data.name}`);
  utils.stopRotateBtn('login-btn');

  setTimeout(() => {
    window.location.assign('/dashboard/movies');
  }, 4000);
}

export function getUserData() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  // console.log(email, password);

  return { email, password };
}

export function handleLogin(controlLogin) {
  const form = document.getElementById('login');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    utils.rotateBtn('login-btn');
    controlLogin('login-btn');
  });
}

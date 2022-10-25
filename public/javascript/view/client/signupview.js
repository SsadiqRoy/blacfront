import * as utils from '../../utils/utils.js';

export const displayError = utils.displayError;

export function renderSignup(data) {
  if (data) {
    utils.alertResponse(`welcome to eventeos, ${data.name}`);
    utils.stopRotateBtn('signup-btn');

    // return;
    setTimeout(() => {
      window.location.assign('/dashboard');
    }, 4000);
  }
}

export function getUserData() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const passwordConfirm = document.getElementById('signup-repeat-password').value;

  if (password !== passwordConfirm) throw new Error('passwords do not match');

  return { name, email, password };
}

export function handleSignup(controlSignup) {
  const form = document.getElementById('signup');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    utils.rotateBtn('signup-btn');

    controlSignup('signup-btn');
  });
}

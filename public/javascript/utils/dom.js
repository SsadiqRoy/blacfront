import * as env from './env.js';

/**
 * display a message on an alert box on the surface
 * @param {String} message the message to display in the alert box
 * @param {Strng} timer the time for the alert box to disappear from surface
 * @param {String} type success, failed,
 */
export function alertResponse(message, timer = 3, type = 'success') {
  const markup = `
    <div class="message message--${type}">
      <div class="message__cover">
        <p>${message}</p>
      </div>
    </div>
  `;
  const body = document.querySelector('body');
  // inserting the element into the body
  body.insertAdjacentHTML('afterbegin', markup);
  const alerter = document.querySelector('.message');
  // showing in the message

  setTimeout(() => {
    alerter.classList.add('message--in');
  }, 500);

  // taking out the message
  setTimeout(() => {
    alerter.classList.remove('message--in');
  }, (timer + 1) * 1000);
  // removing the message element from the body element
  setTimeout(() => {
    body.removeChild(alerter);
  }, timer * 1000 + 1500);
}

//
/**
 * taked the id of a button and rotates it
 * @param {String} btnid id of the button to ratate
 * @param {String} type of button
 * @returns null - breakpoints
 */
export function rotateBtn(btnid, type = 'btn-black') {
  const btn = document.getElementById(btnid);

  if (type === 'btn-black') {
    btn.classList.add('btn-black--rotate');
    return;
  }
  if (type === 'btn-primary') {
    btn.classList.add('btn-primary--rotate');
    return;
  }
  if (type === 'btn-primary--alt') {
    btn.classList.add('btn-primary--alt--rotate');
    return;
  }
  if (type === 'btn-secondary') {
    btn.classList.add('btn-secondary--rotate');
    return;
  }
  if (type === 'btn-secondary--alt') {
    btn.classList.add('btn-secondary--alt--rotate');
    return;
  }
}

//
/**
 * takes the id of a button and stops it from rotating
 * @param {String} btnid id of the button to rotate
 * @param {String} type the type of button
 * @returns null - breakpoints
 */
export function stopRotateBtn(btnid, type = 'btn-black') {
  const btn = document.getElementById(btnid);

  if (type === 'btn-black') {
    btn.classList.remove('btn-black--rotate');
    return;
  }
  if (type === 'btn-primary') {
    btn.classList.remove('btn-primary--rotate');
    return;
  }
  if (type === 'btn-primary--alt') {
    btn.classList.remove('btn-primary--alt--rotate');
    return;
  }
  if (type === 'btn-secondary') {
    btn.classList.remove('btn-secondary--rotate');
    return;
  }
  if (type === 'btn-secondary--alt') {
    btn.classList.remove('btn-secondary--alt--rotate');
    return;
  }
}

//
/**
 * fills the select element
 * @param {String} selectId id of the select Element
 * @param {String} variables the environment variable to fill the select
 */
export function fillSelects(selectId, variables) {
  const select = document.getElementById(selectId);
  if (!select) return console.warn('blaciris - select element not on this page - ', selectId);
  const { value } = select.dataset;

  const vars = env[variables];
  select.innerHTML = '';

  vars.forEach((v) => {
    const markup = `<option value='${v}' ${v === value ? 'selected' : ''}>${v}</option>`;
    select.insertAdjacentHTML('beforeend', markup);
  });
}

/**
 * takes in a query meta data and set it to body dataset. If no query is supplied, it gets the current meta data from the body
 * @param {Object} query the meta query to be set to the body element
 * @returns Object, meta of a query
 */
export function pageQuery(query) {
  const body = document.querySelector('body');
  if (query) {
    body.dataset.meta = JSON.stringify(query);
    return;
  }
  const meta = JSON.parse(body.dataset.meta);
  return meta;
}

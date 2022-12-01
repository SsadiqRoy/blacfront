import * as utils from '../../utils/utils.js';

// ================= RENDERES ===========
export const displayError = utils.displayError;

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========

/*





  */
// ================== INITIALIZER =========
export function initializer() {
  utils.clientSearchBar(), utils.cardsSlider(), utils.suggestPopup(), utils.clientSidebar();
  downloadMedia();
}

/*





  */
// ================== NON EXPORTING FUNCTIONS =
function downloadMedia() {
  const body = document.querySelector('body');
  const main = document.querySelector('main');
  const counter = document.querySelector('.counter');
  const circle = document.querySelector('.counter__circle');
  const btn = document.getElementById('download-btn');

  let current = 10;
  circle.textContent = current;

  const id = setInterval(() => {
    current--;
    circle.textContent = current;
  }, 1000);

  setTimeout(() => {
    clearInterval(id);
  }, 10000);
  setTimeout(() => {
    btn.removeAttribute('disabled');
  }, 11000);

  btn.addEventListener('click', () => {
    const { first } = body.dataset;
    const { third } = main.dataset;
    const { second } = counter.dataset;
    const link = first + second + third;

    const a = document.createElement('a');
    a.setAttribute('href', link);
    a.setAttribute('download', '');
    a.click();
  });
}

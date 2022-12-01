import * as utils from '../../utils/utils.js';

// ================= RENDERES ===========
export const displayError = utils.displayError;

export function renderFillSuggestions({ response, containerId, type, cardName }) {
  const { data: d, suggestions, meta } = response;
  const data = [...d, ...(suggestions || [])].splice(0, 12);
  const container = document.getElementById(containerId);
  const button = document.querySelector('.show-more');

  container.innerHTML = '';

  data.forEach((item) => {
    const card = utils[cardName];
    const markup = card(item, type);
    container.insertAdjacentHTML('beforeend', markup);
  });

  // adding meta to the see more button and adding the button to the container
  if (data.length) {
    delete meta.total, delete meta.length, delete meta.consumed;
    delete meta.next, delete meta.limit, delete meta.page;

    const queryString = utils.stringifyQuery(meta);
    button.href = `/${type}s${queryString}`;

    if (!meta.total) {
      const { text } = document.getElementById('suggestions').dataset;
      const queryString = `?text=${text}`;
      button.href = `/${type}s${queryString}`;
    }
  } else {
    const parent = container.closest('.container');
    parent.classList.add('display-off');
  }
}

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========
export function handleSuggestions(controlSuggestions) {
  window.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('suggestions');
    const { notIn, in: In, text } = content.dataset;
    controlSuggestions({ In, notIn, text });
  });
}
/*





  */
// ================== INITIALIZER =========
export function initializer() {
  utils.clientSearchBar(), utils.cardsSlider(), utils.suggestPopup(), utils.clientSidebar();
  utils.clientSearch('game');

  loadAbout();
}

/*





  */
// ================== NON EXPORTING FUNCTIONS =
function loadAbout() {
  const about = document.getElementById('game-about');

  about.innerHTML = about.dataset.about;
}

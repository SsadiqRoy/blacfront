import * as utils from '../../utils/utils.js';
import * as ind from '../../utils/independent.js';

// ================= RENDERES ===========
export const displayError = utils.displayError;

export function renderLoadContent({ response, containerId, type, cardName }) {
  const { data: d, suggestions, meta } = response;
  const data = [...d, ...(suggestions || [])];
  const container = document.getElementById(containerId);
  const redirector = document.querySelector('.redirects p');

  container.innerHTML = '';

  data.forEach((item) => {
    const card = utils[cardName];
    const markup = card(item, type);
    container.insertAdjacentHTML('beforeend', markup);
  });
  utils.metaQuery(meta);
  const query = window.location.search;
  if (!data.length) {
    redirector.innerHTML = `We couldn't find results for your search. Results in <a href="/series${query}">tv series</a> or in <a href="/movies${query}">movies</a>`;
  } else {
    redirector.innerHTML = `Find results in <a href="/series${query}">tv series</a> or in <a href="/movies${query}">movies</a>`;
  }
}

export function renderLoadMore({ response, containerId, type, cardName }) {
  const { data, meta } = response;
  const container = document.getElementById(containerId);

  data.forEach((item) => {
    const card = utils[cardName];
    const markup = card(item, type);
    container.insertAdjacentHTML('beforeend', markup);
  });
  utils.metaQuery(meta);
  if (!data.length) {
    utils.alertResponse('No more results to show', 3, 'failed');
  }
}

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========

export function handleLoadContent(controlLoadContent) {
  window.addEventListener('DOMContentLoaded', () => {
    let query = window.location.search;
    query = utils.parseQuery(query);
    query.fields = 'title,landscape,rating,id';
    query = utils.stringifyQuery(query);

    controlLoadContent(query);
  });
}

export function handleLoadMore(controlLoadMore) {
  const btn = document.getElementById('show-more');

  btn &&
    btn.addEventListener('click', (e) => {
      let query = utils.metaQuery();

      if (query.next) query.page = query.page + 1;
      else return utils.alertResponse('No more results to show', 3, 'failed');

      query = utils.stringifyQuery(query);
      controlLoadMore(query);
    });
}

/*





  */
// ================== INITIALIZER =========
export function initializer() {
  utils.clientSearchBar(), utils.cardsSlider(), utils.suggestPopup(), utils.clientSidebar();
  utils.clientSearch('game');
  ind.suggest();
}

/*





  */
// ================== NON EXPORTING FUNCTIONS =

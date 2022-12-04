import * as mod from '../model/model.js';
import * as utils from './utils.js';

/**
 * An independent Functon - takes a search text and request for results. Then display the results on the display container
 * @param {String} model sequelize model name in singular. eg "movie", "game"
 * @param {String} containerId element id of the container where the data will be displayed in
 * @param {String} cardType the type of card the data would be using. eg: dbmovieCard, scheduleCard
 * @returns null - break function
 */
export async function searchItem(model, containerId, cardType) {
  const form = document.getElementById('search-form');
  const container = document.getElementById(containerId);

  const body = document.querySelector('body');

  // console.log('searchform ', form);

  form &&
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const text = `?text=${input.value.split(' ').join('-')}`;

      search(text);
    });

  body.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.classList.contains('query')) return;
    const { query } = target.dataset;
    search(query);
  });

  /**
   * makes search or query for data
   * @param {String} text a search word or tag data-query
   * @param {String} type whether your are making a search or a normal query
   * @returns null - breaks
   * type : search or query
   */
  async function search(query) {
    try {
      // search for the data
      const oldquery = utils.metaQuery();
      if (oldquery.fields) query = `${query}&fields=${oldquery.fields}`;

      const { meta, data, suggestion } = await mod.getfull(`/${model}s${query}`);

      // if there is no more results
      if (!data.length && (!suggestion || !suggestion.length)) {
        return utils.alertResponse(`Sorry!! Could not find anything.`, 4, 'failed');
      }
      // clearing the content area
      // const displayer = document.getElementById(containerId);
      container.innerHTML = '';
      // setting the query meta to the body for show more sake
      utils.metaQuery(meta);
      // displaying data to the container
      data.length &&
        data.forEach((item) => {
          const markuper = utils[cardType];
          const markup = markuper(item, model);
          container.insertAdjacentHTML('beforeend', markup);
        });

      // adding more data if there are suggestion
      if (suggestion && suggestion.length) {
        suggestion.forEach((item) => {
          const markuper = utils[cardType];
          const markup = markuper(item, model);
          container.insertAdjacentHTML('beforeend', markup);
        });
      }
    } catch (error) {
      utils.displayError(error);
    }
  }
}

/**
 * An independent Functon - gets the query meta from the body and query for the next page
 * @param {String} model sequelize model name in singular. eg "movie", "game"
 * @param {String} containerId element id of the container where the data will be displayed in
 * @param {String} cardType the type of card the data would be using. eg: dbmovieCard, scheduleCard
 */
export function showMore(model, containerId, cardType) {
  const showMore = document.getElementById('show-more');
  const container = document.getElementById(containerId);

  showMore &&
    showMore.addEventListener('click', async (e) => {
      try {
        const oldmeta = utils.metaQuery();
        oldmeta.page = oldmeta.page + 1;

        const query = utils.stringifyQuery(oldmeta);

        if (!oldmeta.next) {
          return utils.alertResponse(`No more ${model}s to show`, 4, 'failed');
        }

        const { meta, data, suggestion } = await mod.getfull(`/${model}s${query}`);

        // if there is no more results
        if (!meta.length && (!suggestion || !suggestion.length)) {
          return utils.alertResponse(`No more ${model}s to show for the search or tag`, 4, 'failed');
        }

        utils.metaQuery(meta);
        // displaying data to the container
        data.forEach((item) => {
          const markuper = utils[cardType];
          const markup = markuper(item, model);
          container.insertAdjacentHTML('beforeend', markup);
        });

        // adding more data if there are suggestion
        if (suggestion && suggestion.length) {
          suggestion.forEach((item) => {
            const markuper = utils[cardType];
            const markup = markuper(item, model);
            container.insertAdjacentHTML('beforeend', markup);
          });
        }
      } catch (error) {
        utils.displayError(error);
      }
    });
}

export function logout() {
  const btn = document.getElementById('logout');

  btn &&
    btn.addEventListener('click', async (e) => {
      const response = await mod.getfull('/users/logout');

      utils.alertResponse(response.message);
      window.setTimeout(() => window.location.assign('/'), 3500);
    });
}

export function suggest() {
  const form = document.getElementById('create-suggest');

  form.addEventListener('submit', async (e) => {
    try {
      e.preventDefault();
      utils.rotateBtn('suggest-btn');
      const on = document.getElementById('suggest-on').value;
      const title = document.getElementById('suggest-title').value;
      const message = document.getElementById('suggest-activity').value;
      const by = document.getElementById('suggest-email').value;

      const body = { on, title, message, by };
      await mod.post('/suggestions/create', body);

      utils.alertResponse('Thanks for your support. We would make sure to provide it');
      utils.stopRotateBtn('suggest-btn');
      utils.closePopup('suggest-popup');
    } catch (error) {
      console.error(error);
      utils.alertResponse('Sorry! the system couldn`t save your suggestion. Please try again', 3, 'failed');
      utils.stopRotateBtn('suggest-btn');
      utils.closePopup('suggest-popup');
    }
  });
}

//
export function problem() {
  const form = document.getElementById('create-problem');

  form.addEventListener('submit', async (e) => {
    try {
      e.preventDefault();
      utils.rotateBtn('problem-btn');

      const by = document.getElementById('problem-email').value;
      const on = document.getElementById('problem-on').value;
      const message = document.getElementById('problem-activity').value;

      const body = { on, message, by };
      await mod.post('/problems/create', body);

      utils.alertResponse('Thanks for your support. We would make sure to fix it');
      utils.stopRotateBtn('problem-btn');
      utils.closePopup('problem-popup');
    } catch (error) {
      console.error(error);
      utils.stopRotateBtn('problem-btn');

      utils.alertResponse('Sorry! the system couldn`t save your problem. Please try again', 3, 'failed');
      utils.closePopup('problem-popup');
    }
  });
}

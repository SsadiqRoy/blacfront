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
  const body = document.querySelector('body');

  // console.log('searchform ', form);

  form &&
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = form.querySelector('input');
      const text = input.value;

      search(text);
    });

  body.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.classList.contains('query-tag')) return;
    const { query } = target.dataset;

    if (target.classList.contains('search')) {
      search(query);
    }
    if (target.classList.contains('query')) {
      search(query, 'query');
    }
  });

  /**
   * makes search or query for data
   * @param {String} text a search word or tag data-query
   * @param {String} type whether your are making a search or a normal query
   * @returns null - breaks
   * type : search or query
   */
  async function search(text, type = 'search') {
    try {
      // search for the data
      let meta, data, suggestion;
      if (type === 'search') {
        const searchText = text.split(' ').join('-');
        const { meta: m, data: d, suggestion: s } = await mod.getfull(`/${model}s/search?text=${searchText}`);
        meta = m;
        data = d;
        suggestion = s;
      }
      if (type === 'query') {
        const { meta: m, data: d, suggestion: s } = await mod.getfull(`/${model}s?${text}`);
        meta = m;
        data = d;
        suggestion = s;
      }

      // if there is no more results
      // console.log(data);
      if (!data.length && (!suggestion || !suggestion.length)) {
        return utils.alertResponse(`Sorry!! Could not find anything.`, 4, 'failed');
      }
      // clearing the content area
      const displayer = document.getElementById(containerId);
      displayer.innerHTML = '';
      // setting the query meta to the body for show more sake
      utils.pageQuery(meta);
      // displaying data to the container
      data.length &&
        data.forEach((item) => {
          const markuper = utils[cardType];
          const markup = markuper(item, model);
          displayer.insertAdjacentHTML('beforeend', markup);
        });

      // adding more data if there are suggestion
      if (suggestion && suggestion.length) {
        suggestion.forEach((item) => {
          const markuper = utils[cardType];
          const markup = markuper(item, model);
          displayer.insertAdjacentHTML('beforeend', markup);
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
  // console.log('showMore ', showMore);

  showMore &&
    showMore.addEventListener('click', async (e) => {
      try {
        const query = utils.structureQuery();
        const oldmeta = utils.pageQuery();

        if (!oldmeta.length) {
          return utils.alertResponse(`No more ${model}s to show`, 4, 'failed');
        }

        console.log(oldmeta);

        let meta, data, suggestion;
        if (oldmeta.text) {
          const { meta: m, data: d, suggestion: s } = await mod.getfull(`/${model}s/search${query}`);
          meta = m;
          data = d;
          suggestion = s;
        } else {
          const { meta: m, data: d, suggestion: s } = await mod.getfull(`/${model}s${query}`);
          meta = m;
          data = d;
          suggestion = s;
        }

        // if there is no more results
        if (!meta.length && (!suggestion || !suggestion.length)) {
          return utils.alertResponse(`No more ${model}s to show for the search or tag`, 4, 'failed');
        }
        utils.pageQuery(meta);
        // clearing the content area
        const displayer = document.getElementById(containerId);
        // displaying data to the container
        data.forEach((item) => {
          const markuper = utils[cardType];
          const markup = markuper(item, model);
          displayer.insertAdjacentHTML('beforeend', markup);
        });

        // adding more data if there are suggestion
        if (suggestion && suggestion.length) {
          suggestion.forEach((item) => {
            const markuper = utils[cardType];
            const markup = markuper(item, model);
            displayer.insertAdjacentHTML('beforeend', markup);
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
    });
}

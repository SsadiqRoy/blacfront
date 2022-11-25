import * as dom from './dom.js';

/**
 * displays an error on the interface and stop a button from totating
 * @param {Object} error error to be executed
 * @param {String} btnid id of a button that is rotating if any
 * @param {String} type btn-black, btn-primary etc
 */
export function displayError(error, btnid, type) {
  console.log(error);
  const message = error.message;
  dom.alertResponse(message, 6, 'failed');

  if (btnid) {
    dom.stopRotateBtn(btnid, type);
  }
}

/**
 * takes a search value, gets a meta data of a query from the body element, sets the meta data to body
 * @param {String} search search value
 * @returns query in String (query string)
 */
export function structureQuery(search) {
  let query;
  if (search) {
    query = { text };
  } else {
    query = dom.metaQuery();
    const { page, limit, total } = query;
    query.page = page + 1;
  }

  const queryString = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `?${queryString}`;
}

export function stringifyQuery(query) {
  const queryString = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `?${queryString}`;
}

export function parseQuery(queryString) {
  const query = {};
  const queries = queryString.slice(1).split('&');

  queries.forEach((q) => {
    const a = q.split('=');
    query[a[0]] = a[1];
  });

  return query;
}

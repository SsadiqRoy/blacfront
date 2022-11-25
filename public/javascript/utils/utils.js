import * as res from './responsive.js';
import * as funcs from './functions.js';
import * as env from './env.js';
import * as dom from './dom.js';
import * as markups from './markups.js';

// ================== responsive functions
export const openPopup = res.openPopup;
export const closePopup = res.closePopup;
export const adminSidebar = res.adminSidebar;
export const adminSearchBar = res.adminSearchBar;
export const clientSearchBar = res.clientSearchBar;
export const cardsSlider = res.cardsSlider;
export const suggestPopup = res.suggestPopup;
export const clientSidebar = res.clientSidebar;

// ==================== ENVIRONMENT VARIABLES ========
export const api_url = env.api_url;
export const main_url = env.main_url;
export const countries = env.countries;
export const serieStatus = env.serieStatus;
export const resolutions = env.resolutions;

// ==================== DOM FUNCTONS ==================
export const alertResponse = dom.alertResponse;
export const rotateBtn = dom.rotateBtn;
export const stopRotateBtn = dom.stopRotateBtn;
export const fillSelects = dom.fillSelects;
export const metaQuery = dom.metaQuery;

// ==================== FUNCTIONS ======================
export const displayError = funcs.displayError;
export const structureQuery = funcs.structureQuery;
export const stringifyQuery = funcs.stringifyQuery;
export const parseQuery = funcs.parseQuery;

// ==================== MARKUP FUNCTIONS ===============
export const dbMovieCard = markups.dbMovieCard;
export const notificationCard = markups.notificationCard;
export const scheduleCard = markups.scheduleCard;

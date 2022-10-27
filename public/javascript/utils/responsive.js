/**
 * opens a popup and closes it when the dark area or close button is clicked
 * @param {String} id id of the popup element
 * @param {Function} callback a callback function to be called on popup close
 */
export function openPopup(id, callback = undefined) {
  const pid = `#${id}`;
  const popup = document.querySelector(pid);
  const closeBtn = popup.querySelector('.popup-close');

  // opening the popup
  popup.classList.remove('display-off');

  // closing the popup when the close button is clicked
  closeBtn.addEventListener('click', (e) => {
    popup.classList.add('display-off');
    if (callback) callback();
  });

  // closing popup when the dark area is clicked
  popup.addEventListener('click', (e) => {
    const box = e.target.closest('.popup-box');
    if (box) return;
    popup.classList.add('display-off');
    if (callback) callback();
  });
}

//

/**
 * closes a popup
 * @param {String} id element id of the popup element
 * @param {Function} callback a callback function to be called on close
 */
export function closePopup(id, callback = null) {
  const pid = `#${id}`;
  const popup = document.querySelector(pid);

  popup.classList.add('display-off');
  if (callback) callback();
}

/**
 * Opens and close the admin sidebar when the menu bars on the header is clicked
 */
export function adminSidebar() {
  const menuBar = document.getElementById('dashboard-menubar');

  menuBar &&
    menuBar.addEventListener('click', (e) => {
      const sidebar = document.getElementById('dashboard-sidebar');
      if (!sidebar) return;

      sidebar.on;
      // checking if sidebar is already open
      const isOpen = sidebar.dataset.isOpen;
      // closing sidebar
      if (isOpen == 'true') {
        sidebar.style.left = '-100%';
        sidebar.dataset.isOpen = false;
      }
      // opening the sidebar
      if (!isOpen || isOpen == 'false') {
        sidebar.style.left = '0';
        sidebar.dataset.isOpen = true;
      }
    });
}
/*

- name: FTP Deploy
  uses: SamKirkland/FTP-Deploy-Action@4.3.2

*/

/**
 * Made for devices with width under 400px.
 * Making the search bar visible when the search icon is clicked and
 * hiding it on blur
 */
export function adminSearchBar() {
  const searchBtn = document.getElementById('search-button');
  const logo = document.querySelector('.dashboard-header__logo');
  const user = document.querySelector('.dashboard-header__user');
  const searchBar = document.getElementById('search-bar');
  // making searh visible and hiding logo and username
  searchBtn &&
    searchBtn.addEventListener('click', (e) => {
      logo.style.display = 'none';
      user.style.display = 'none';
      searchBtn.style.display = 'none';
      searchBar.style.display = 'initial';
      searchBar.focus();
    });
  // hiding searchbar and unhiding logo and username
  searchBar &&
    searchBar.addEventListener('blur', () => {
      if (window.innerWidth < 400 && searchBar.value.length < 1) {
        logo.style.display = 'initial';
        user.style.display = 'initial';
        searchBtn.style.display = 'initial';
        searchBar.style.display = 'none';
      }
    });
}

/**
 * Made for devices with width under 400px.
 * Making the search bar visible when the search icon is clicked and
 * hiding it on blur
 */
export function clientSearchBar() {
  const searchBtn = document.getElementById('search-button');
  const logo = document.querySelector('.header__logo');
  const user = document.querySelector('.main-titles');
  const searchBar = document.getElementById('search-bar');
  // making searh visible and hiding logo and username
  searchBtn &&
    searchBtn.addEventListener('click', (e) => {
      logo.style.display = 'none';
      user.style.display = 'none';
      searchBtn.style.display = 'none';
      searchBar.style.display = 'initial';
      searchBar.focus();
    });
  // hiding searchbar and unhiding logo and username
  searchBar &&
    searchBar.addEventListener('blur', () => {
      if (window.innerWidth < 600 && searchBar.value.length < 1) {
        logo.style.display = 'flex';
        user.style.display = 'initial';
        searchBtn.style.display = 'initial';
        searchBar.style.display = 'none';
      }
    });
}

/**
 * allows cards in a slider box to be slided to left or right
 */
export function cardsSlider() {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    const { target } = e;
    if (!target.classList.contains('slider-btn')) return;

    const box = target.parentElement.querySelector('.slider__container');
    const leftBtn = target.classList.contains('slider-btn--left');

    // finding the distance to scroll by
    let scrollLength = window.innerWidth;
    scrollLength = scrollLength > 599 ? 0.7 * scrollLength : 0.9 * scrollLength;
    scrollLength = leftBtn ? -scrollLength : scrollLength;
    // scrolling the element
    box.scrollBy({
      behavior: 'smooth',
      left: scrollLength,
    });
  });
}

/**
 * Opens the popup for suggestions
 */
export function suggestPopup() {
  const body = document.querySelector('body');

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('suggest')) openPopup('suggest-popup');
  });
}

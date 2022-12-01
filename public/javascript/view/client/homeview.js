import * as utils from '../../utils/utils.js';

// ================= RENDERES ===========
export const displayError = utils.displayError;

export function renderHeadingSlide(data) {
  const mother = document.querySelector('.head-slider');
  const first = mother.querySelector('.first-image');
  const second = mother.querySelector('.second-image');
  const third = mother.querySelector('.third-image');

  const links = data;
  // const j = [
  //   {
  //     title: 'We Crashed',
  //     image: '/images/image-1.jpg',
  //     description:
  //       'Sit ratione optio aut velit nihil aspernatur magnam est, facere temporibus in neque necessitatibus assumenda. Aut doloremque voluptas incidunt natus itaque earum?',
  //   },
  //   {
  //     title: 'M. Night from Shyamalan: Servant',
  //     image: '/images/image-2.jpg',
  //     description: 'Alias beatae sapiente dignissimos ipsa excepturi laboriosam fuga nemo, quaerat nostrum ad.',
  //   },
  //   {
  //     title: 'For All Mankind',
  //     image: '/images/image-3.jpg',
  //     description: 'Id exercitationem illo, dolorem porro provident natus aspernatur corporis labore quas accusamus?',
  //   },
  //   {
  //     title: 'Tehran',
  //     image: '/images/image-4.jpg',
  //     description: 'Quia aspernatur nesciunt porro! Temporibus, ullam! Possimus, distinctio nemo. Eum, cum labore?',
  //   },
  //   {
  //     title: 'Black Bird',
  //     image: '/images/image-5.jpg',
  //     description: 'Cupiditate omnis placeat illum id nemo velit dolorem facere perspiciatis deserunt culpa!',
  //   },
  //   {
  //     title: 'Truth Be Told',
  //     image: '/images/image-6.jpg',
  //     description: 'Ea doloremque temporibus aut adipisci, velit repellat eum fugit quasi sunt recusandae?',
  //   },
  // ];

  function shiftLinks() {
    const a = links.shift();
    links.push(a);
  }

  function swapper(box, position) {
    const ob = links[position];
    box.querySelector('img').setAttribute('src', ob.landscape);
    box.querySelector('a').setAttribute('href', `/movie/${ob.title.toLowerCase().split(' ').join('-')}/${ob.id}`);

    if (box.classList.contains('second-image')) {
      box.querySelector('h2').textContent = ob.title;
      box.querySelector('p').textContent = ob.description;
      box
        .querySelector('.image-box-about a')
        .setAttribute('href', `/movie/${ob.title.toLowerCase().split(' ').join('-')}/${ob.id}`);
    }
  }

  function swapImage() {
    // console.log('hitting');
    swapper(third, 0);
    setTimeout(() => {
      swapper(second, 1), 1000;
    });
    setTimeout(() => {
      swapper(first, 2), 2000;
    });
    setTimeout(() => {
      shiftLinks(), 3000;
    });
  }
  swapImage();
  setInterval(swapImage, 5000);
}

//
export function renderFillSliders({ response, containerId, type, cardName }) {
  const { data, meta } = response;
  const container = document.getElementById(containerId);
  const button = container.querySelector('.slider__container-box-button');

  container.innerHTML = '';

  data.forEach((item) => {
    const card = utils[cardName];
    const markup = card(item, type);
    container.insertAdjacentHTML('beforeend', markup);
  });

  // adding meta to the see more button and adding the button to the container
  if (meta.total) {
    delete meta.total, delete meta.length, delete meta.consumed;
    delete meta.next, delete meta.limit, delete meta.page;

    const queryString = utils.stringifyQuery(meta);
    button.querySelector('a').href = `/${type}s${queryString}`;
    container.insertAdjacentElement('beforeend', button);
  } else {
    const parent = container.closest('.slider');
    parent.classList.add('display-off');
  }
}

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========
export function handleFillSliders(controlFillSliders) {
  document.addEventListener('DOMContentLoaded', () => {
    controlFillSliders();
  });
}

/*





  */
// ================== INITIALIZER =========
export function initializer() {
  utils.clientSearchBar(), utils.cardsSlider(), utils.suggestPopup(), utils.clientSidebar();
  utils.clientSearch('movie');
}

/*





  */
// ================== NON EXPORTING FUNCTIONS =

// =======================================================================

// ================= RENDERES ===========

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========

/*





  */
// ================== INITIALIZER =========

/*





  */
// ================== NON EXPORTING FUNCTIONS =

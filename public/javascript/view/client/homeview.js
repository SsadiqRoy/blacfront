import * as utils from "../../utils/utils.js";
import * as ind from "../../utils/independent.js";

// ================= RENDERES ===========
export const displayError = utils.displayError;

export function renderHeadingSlide(data) {
  const mother = document.querySelector(".head-slider");
  const first = mother.querySelector(".first-image");
  const second = mother.querySelector(".second-image");
  const third = mother.querySelector(".third-image");

  const links = data;

  function shiftLinks() {
    const a = links.shift();
    links.push(a);
  }

  function swapper(box, position) {
    const ob = links[position];
    box.querySelector("img").setAttribute("src", ob.landscape);
    box.querySelector("a").setAttribute("href", `/${ob.type}/${ob.title.toLowerCase().split(" ").join("-")}/${ob.id}`);

    if (box.classList.contains("second-image")) {
      box.querySelector("h2").textContent = ob.title;
      box.querySelector("p").textContent = ob.description;
      box.querySelector(".image-box-about a").setAttribute("href", `/movie/${ob.title.toLowerCase().split(" ").join("-")}/${ob.id}`);
    }
  }

  function swapImage() {
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
  const button = container.querySelector(".slider__container-box-button");

  container.innerHTML = "";

  data.forEach((item) => {
    const card = utils[cardName];
    const markup = card(item, type);
    container.insertAdjacentHTML("beforeend", markup);
  });

  // adding meta to the see more button and adding the button to the container
  if (data.length) {
    delete meta.total, delete meta.length, delete meta.consumed;
    delete meta.next, delete meta.limit, delete meta.page;

    const queryString = utils.stringifyQuery(meta);
    button.querySelector("a").href = `/${type}s${queryString}`;
    container.insertAdjacentElement("beforeend", button);
  } else {
    const parent = container.closest(".slider");
    parent.classList.add("display-off");
  }
}

/*





  */
// ================== GETTERS ============

/*





  */
// =================== HANDLERS ==========
export function handleFillSliders(controlFillSliders) {
  document.addEventListener("DOMContentLoaded", () => {
    controlFillSliders();
  });
}

/*





  */
// ================== INITIALIZER =========
export function initializer() {
  utils.clientSearchBar(), utils.cardsSlider(), utils.suggestPopup(), utils.clientSidebar();
  utils.clientSearch("movie");

  ind.suggest();
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

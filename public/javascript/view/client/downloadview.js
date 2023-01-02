import * as utils from "../../utils/utils.js";
import * as ind from "../../utils/independent.js";

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
  utils.clientSearchBar(),
    utils.cardsSlider(),
    utils.suggestPopup(),
    utils.clientSidebar();
  ind.suggest();
  downloadMedia();
}

/*





  */
// ================== NON EXPORTING FUNCTIONS =
function downloadMedia() {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const counter = document.querySelector(".counter");
  const circle = document.querySelector(".counter__circle");
  const btn = document.getElementById("download-btn");

  let current = 5;
  circle.textContent = current;

  const id = setInterval(() => {
    current--;
    circle.textContent = current;
  }, 1000);

  setTimeout(() => {
    clearInterval(id);
  }, 6000);
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 6000);

  btn.addEventListener("click", () => {
    const { first } = body.dataset;
    const { third } = main.dataset;
    const { second } = counter.dataset;
    const link = first + second + third;

    const a = document.createElement("a");
    a.setAttribute("href", link);
    a.setAttribute("target", "_blank");

    // a.setAttribute("download", "");
    a.click();
  });
}

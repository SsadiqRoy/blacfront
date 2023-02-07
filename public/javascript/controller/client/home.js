import * as view from "../../view/client/homeview.js";
import * as model from "../../model/model.js";

async function controlHeadingSlide() {
  try {
    let response = await model.get("/series?fields=title,landscape,description,rating,id&limit=5&rating=gte,8&order=releasedDate,desc");
    let respons = await model.get("/movies?fields=title,landscape,description,rating,id&limit=5&rating=gte,7.5&order=releasedDate,desc");

    response = response.map((r) => {
      r.type = "serie";
      return r;
    });
    respons = respons.map((r) => {
      r.type = "movie";
      return r;
    });

    const all = [...response, ...respons].sort((a, b) => b.rating - a.rating);
    view.renderHeadingSlide(all);
  } catch (error) {
    await model.localPost("/write-to-log", error);
    console.log(error);
  }
}

async function fillMovies() {
  try {
    const response = await model.getfull("/movies?fields=title,portrait,rating,id&limit=20&order=releasedDate,desc");
    view.renderFillSliders({
      response,
      containerId: "first-movies",
      type: "movie",
      cardName: "movieCard",
    });

    const res2 = await model.getfull("/movies?fields=title,portrait,rating,id&limit=20&order=releasedDate,desc&rating=gte,5.5");
    view.renderFillSliders({
      response: res2,
      containerId: "second-movies",
      type: "movie",
      cardName: "movieCard",
    });
  } catch (error) {
    console.log(error);
    await model.localPost("/write-to-log", error);
  }
}

async function fillSeries() {
  try {
    const response = await model.getfull("/series?fields=title,portrait,rating,id&limit=20&order=releasedDate,desc");
    view.renderFillSliders({
      response,
      containerId: "first-series",
      type: "serie",
      cardName: "movieCard",
    });

    const res2 = await model.getfull("/series?fields=title,portrait,rating,id&limit=20&order=releasedDate,desc&rating=gte,5.5");
    view.renderFillSliders({
      response: res2,
      containerId: "second-series",
      type: "serie",
      cardName: "movieCard",
    });

    const res3 = await model.getfull("/series?fields=title,portrait,rating,id&limit=20&order=updatedAt,desc&rating=gte,5.5");
    view.renderFillSliders({
      response: res3,
      containerId: "third-series",
      type: "serie",
      cardName: "movieCard",
    });
  } catch (error) {
    await model.localPost("/write-to-log", error);
    console.log(error);
  }
}

async function fillGames() {
  try {
    const response = await model.getfull("/games?fields=title,landscape,rating,id&limit=20&order=releasedDate,desc");
    view.renderFillSliders({
      response,
      containerId: "first-games",
      type: "game",
      cardName: "gameCard",
    });

    const res2 = await model.getfull("/games?fields=title,landscape,rating,id&limit=20&order=releasedDate,desc&rating=gte,5.5");
    view.renderFillSliders({
      response: res2,
      containerId: "second-games",
      type: "game",
      cardName: "gameCard",
    });
  } catch (error) {
    await model.localPost("/write-to-log", error);
    console.log(error);
  }
}

/*







*/
async function controlFillSliders() {
  controlHeadingSlide();
  fillMovies(), fillSeries(), fillGames();
}

async function initializer() {
  view.initializer();
  view.handleFillSliders(controlFillSliders);
}
initializer();

import * as view from "../../view/client/seriesview.js";
import * as model from "../../model/model.js";

async function controlLoadContent(query) {
  try {
    if (!query) query = `?order=releasedDate,desc,rating,desc`;
    const response = await model.getfull(`/series${query}`);
    view.renderLoadContent({
      response,
      containerId: "content",
      type: "serie",
      cardName: "movieCard",
    });
  } catch (error) {
    console.log(error);
  }
}

async function controlLoadMore(query) {
  try {
    const response = await model.getfull(`/series${query}`);
    view.renderLoadMore({
      response,
      containerId: "content",
      type: "serie",
      cardName: "movieCard",
    });
  } catch (error) {
    console.log(error);
  }
}

async function initializer() {
  view.initializer();
  view.handleLoadContent(controlLoadContent);
  view.handleLoadMore(controlLoadMore);
}
initializer();

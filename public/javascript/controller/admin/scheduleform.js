import * as view from '../../view/admin/scheduleformview.js';
import * as model from '../../model/model.js';

async function controlCreate(btnId) {
  try {
    const data = view.getScheduleData();
    // console.log(data);

    const res = await model.post('/schedules/create', data);
    view.renderCreated(res, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

//
async function controlUpdate(scheduleId, btnId) {
  try {
    const data = view.getScheduleData();

    const res = await model.patch(`/schedules/${scheduleId}`, data);
    view.renderCreated(res, 'created', btnId);
  } catch (error) {
    view.displayError(error, btnId);
  }
}

async function init() {
  view.handleCreate(controlCreate, controlUpdate);
}
init();

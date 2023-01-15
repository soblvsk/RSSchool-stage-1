import { CarsData } from '../../../constants/interfaces';

class GarageControls {
  render(data: CarsData) {
    const control = document.querySelector('.garage__controls') as HTMLDivElement;

    control.innerHTML = `
  <div class="garage__information">
    <div class="garage__generate">
      <p class="font_S">Cars in the garage: <span class="cars-count">${data.count}<span></p>
      <button class="btn btn_M btn_primary btn-generate">generate cars</button>
    </div>
    <div class="garage__create create">
      <div class="create__name">
        <label class="create__name-label font_S">Name:</label>
        <input class="create__name-input font_S" placeholder="Car name" >
      </div>
      <div class="create__color">
        <label class="create__color-label font_S">Color:</label>
        <input class="create__color-input" type="color" >
      </div>
      <button class="btn btn_M btn_primary btn-create">create car</button>
    </div>
  </div>
  <div class="garage__race">
    <button class="btn btn_L btn_primary btn-race-start">Start</button>
    <button class="btn btn_L btn_primary btn-race-reset">Reset</button>
  </div>
  `;
  }
}

const garageControlsComponent = new GarageControls();
export default garageControlsComponent;

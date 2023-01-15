import { Car } from '../../../constants/interfaces';
import { drawCar } from '../../../constants/utils';

class GarageRacing {
  drawCarItem(car: Car) {
    return `
    <div class="car-racing__edit">
      <div class="car-racing__edit-header">
        <button class="btn btn_M btn_primary btn-edit" data-id=${car.id}>E</button>
        <p class="font_XS car-name">${car.name}</p>
        <button class="btn btn_M btn_primary btn-delete" data-id=${car.id}>X</button>
      </div>
      <div class="car-racing__edit-body">
        <button class="btn btn_M btn_primary btn-car-reset" data-id=${car.id} disabled>Reset</button>
        <button class="btn btn_M btn_primary btn-car-start" data-id=${car.id}>Start</button>
      </div>
    </div>
    <div class="car-racing__track" data-id=${car.id}>
      <div class="car-racing__item" data-id=${car.id}>
        ${drawCar(car.color)}
      </div>
      <img class="img-finish" src="../../../assets/finish.svg" alt="Finish"> 
    </div>
    `;
  }

  render(data: Car[]) {
    const racing = document.querySelector('.garage__racing') as HTMLDivElement;

    racing.innerHTML = `
    ${data
      .map(
        (item) => `<div class="car-racing">
        ${this.drawCarItem(item)}
      </div>`
      )
      .join('\n')}
    `;
  }
}

const garageRacingComponent = new GarageRacing();
export default garageRacingComponent;

import garageScreen from '../views/pages/GarageScreen/GarageScreen';
import winnersScreen from '../views/pages/WinnersScreen/WinnersScreen';
import ControllerGarage from './ControllerGarage';
import ControllerWinners from './ControllerWinners';

class ControllerPage {
  private garageController: ControllerGarage;
  private winnersController: ControllerWinners;

  constructor() {
    this.garageController = new ControllerGarage();
    this.winnersController = new ControllerWinners();
  }
  async start() {
    garageScreen.render();
    winnersScreen.render();
    await this.garageController.start();
    await this.winnersController.start();

    const garage = document.querySelector('.garage') as HTMLDivElement;
    const winners = document.querySelector('.winners') as HTMLDivElement;
    const garageBtn = document.querySelector('.btn-garage') as HTMLButtonElement;
    const winnersBtn = document.querySelector('.btn-winners') as HTMLButtonElement;

    garageBtn.addEventListener('click', async () => {
      garage.style.display = '';
      winners.style.display = 'none';
    });
    winnersBtn.addEventListener('click', async () => {
      garage.style.display = 'none';
      winners.style.display = '';
    });
  }
}
export default ControllerPage;

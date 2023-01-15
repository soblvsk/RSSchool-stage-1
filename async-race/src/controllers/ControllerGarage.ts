import Engine from '../api/Engine';
import Garage from '../api/Garage';
import Winners from '../api/Winners';
import { EngineCar } from '../constants/interfaces';
import { getRandomCars, getRandomName, store } from '../constants/utils';
import garageControlsComponent from '../views/components/GarageControls/GarageControls';
import garagePaginationComponent from '../views/components/GaragePagination/GaragePagination';
import garageRacingComponent from '../views/components/GarageRacing/GarageRacing';

class ControllerGarage {
  private garage: Garage;
  private winners: Winners;
  private engine: Engine;
  private animations: { [index: number]: number };
  private carRace: { [index: number]: boolean };

  constructor() {
    this.garage = new Garage();
    this.winners = new Winners();
    this.engine = new Engine();
    this.animations = {};
    this.carRace = {};
  }

  async start() {
    await this.loading();

    (document.querySelector('.garage') as HTMLDivElement).addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;
      if (target.closest('.btn-edit')) await this.editCar(target);
      if (target.closest('.btn-delete')) await this.removeCar(target);
      if (target.closest('.btn-car-reset')) await this.resetCar(Number(target.dataset.id));
      if (target.closest('.btn-car-start')) await this.startCar(Number(target.dataset.id));
      if (target.closest('.btn-create')) await this.createCar();
      if (target.closest('.btn-generate')) await this.generateCars();
      if (target.closest('.btn-race-start')) await this.startRace();
      if (target.closest('.btn-race-reset')) await this.resetRace();
      if (target.closest('.btn-garage-prev')) await this.pagination('prev');
      if (target.closest('.btn-garage-next')) await this.pagination('next');
    });

    (document.querySelector('.modal__overlay') as HTMLDivElement).addEventListener('click', () => {
      this.closeModal();
    });
  }

  async loading() {
    const cars = await this.garage.getCars(store.garagePage);
    store.countPagesGarage = Math.ceil(Number(cars.count) / 7);

    garageControlsComponent.render(cars);
    garageRacingComponent.render(cars.items);
    garagePaginationComponent.render(store.garagePage, store.countPagesGarage);

    const btnPrev = document.querySelector('.btn-garage-prev') as HTMLButtonElement;
    if (store.garagePage === 1) btnPrev.disabled = true;
    else btnPrev.disabled = false;

    const btnNext = document.querySelector('.btn-garage-next') as HTMLButtonElement;
    if (Number(cars.count) > store.countPagesGarage) btnNext.disabled = false;
    if (store.garagePage >= store.countPagesGarage) btnNext.disabled = true;
  }

  async removeCar(target: HTMLElement) {
    const carId = Number(target.dataset.id);
    await this.garage.deleteCar(carId);
    await this.loading();
  }

  async editCar(target: HTMLElement) {
    let updateBtn = document.querySelector('.btn-create') as HTMLButtonElement;
    const nameCreateCar = document.querySelector('.create__name-input') as HTMLInputElement;
    const colorCreateCar = document.querySelector('.create__color-input') as HTMLInputElement;

    const carId = Number(target.dataset.id);
    const carsData = await this.garage.getCars(store.garagePage);
    const car = carsData.items.find((element) => element.id === carId);

    if (!updateBtn) updateBtn = document.querySelector('.btn-update') as HTMLButtonElement;
    if (updateBtn.classList.contains('btn-create')) {
      updateBtn.classList.remove('btn-create');
      updateBtn.classList.add('btn-update');
      updateBtn.innerHTML = 'Update Car';
    }

    nameCreateCar.value = `${car?.name}`;
    colorCreateCar.value = `${car?.color}`;

    updateBtn.addEventListener('click', async () => {
      await this.garage.updateCar(carId, { name: nameCreateCar.value, color: colorCreateCar.value });
      await this.loading();
    });
  }

  async createCar() {
    const nameCreateCar = document.querySelector('.create__name-input') as HTMLInputElement;
    const colorCreateCar = document.querySelector('.create__color-input') as HTMLInputElement;

    if (!nameCreateCar.value) nameCreateCar.value = getRandomName();

    await this.garage.createCar({ name: nameCreateCar.value, color: colorCreateCar.value });
    nameCreateCar.value = '';
    await this.loading();
  }

  async generateCars() {
    const generateBtn = document.querySelector('.btn-generate') as HTMLButtonElement;

    generateBtn.disabled = true;
    generateBtn.innerHTML = 'Generating';

    const cars = getRandomCars();
    await Promise.all(cars.map((element) => this.garage.createCar(element)));

    generateBtn.disabled = false;
    generateBtn.innerHTML = 'Generate cars';

    await this.loading();
  }

  async pagination(btn: string) {
    const btnPrev = document.querySelector('.btn-garage-prev') as HTMLButtonElement;
    const btnNext = document.querySelector('.btn-garage-next') as HTMLButtonElement;

    if (btn === 'prev') {
      if (store.garagePage === 1) btnPrev.disabled = true;

      if (store.garagePage > 1) {
        store.garagePage--;
        btnNext.disabled = false;
      }
      await this.loading();
    } else {
      if (store.garagePage === store.countPagesGarage) btnNext.disabled = true;

      if (store.garagePage < store.countPagesGarage) {
        store.garagePage++;
        btnPrev.disabled = false;
      }
      await this.loading();
    }
  }

  async animateCar(carId: number, raceCar: HTMLDivElement, duration: number, trackLength: number) {
    let start: number;

    const animation = (time: number) => {
      let progress = (time - start) / duration;
      if (progress > 1) progress = 1;
      const length = trackLength * progress;
      raceCar.style.left = `${length}px`;

      if (progress < 1) {
        this.animations[carId] = requestAnimationFrame((time) => {
          animation(time);
        });
      }
    };

    requestAnimationFrame((time) => {
      start = time;
      animation(time);
    });

    const result = await this.engine.driveEngine(carId);

    if (result !== 200) {
      this.carRace[carId] = false;
      cancelAnimationFrame(this.animations[carId]);
      return false;
    }

    return true;
  }

  async startCar(carId: number) {
    const startBtn = document.querySelector(`.btn-car-start[data-id="${carId}"]`) as HTMLButtonElement;
    const stopBtn = document.querySelector(`.btn-car-reset[data-id="${carId}"]`) as HTMLButtonElement;
    const raceTrack = document.querySelector(`.car-racing__track[data-id="${carId}"]`) as HTMLDivElement;
    const raceCar = document.querySelector(`.car-racing__item[data-id="${carId}"]`) as HTMLDivElement;

    this.carRace[carId] = true;
    raceCar.style.left = '0px';
    startBtn.disabled = true;
    stopBtn.disabled = false;

    const lengthRoad = raceTrack.offsetWidth - raceCar.offsetWidth;
    const engineCar: EngineCar = await this.engine.startEngine(carId);
    const duration = engineCar.distance / engineCar.velocity;
    const result = await this.animateCar(carId, raceCar, duration, lengthRoad);

    if (result) return { carId, duration };
    else return Promise.reject();
  }

  async startRace() {
    const startRaceBtn = document.querySelector('.btn-race-start') as HTMLButtonElement;
    const modal = document.querySelector('.modal') as HTMLDivElement;

    startRaceBtn.disabled = true;

    const carsData = await this.garage.getCars(store.garagePage);
    Promise.any(carsData.items.map((element) => this.startCar(element.id)))
      .then((result) => {
        if (this.carRace[result.carId] === true) {
          const carName = carsData.items.find((element) => element.id === result.carId)?.name;
          modal.classList.add('modal-open');
          this.openModal(Math.floor(result.duration) / 1000, carName);
          this.addWinner(result.carId, Math.floor(result.duration) / 1000);
        }
      })
      .catch(() => {})
      .finally(() => {});
  }

  openModal(duration: number, name?: string) {
    document.body.style.overflow = 'hidden';
    const winCar = document.querySelector('.win-car') as HTMLDivElement;
    winCar.innerHTML = `${name} <br>Time: ${duration} sec`;
  }

  closeModal() {
    const modal = document.querySelector('.modal') as HTMLDivElement;
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  async addWinner(carId: number, timeCar: number) {
    const winners = await this.winners.getWinner(carId);
    if (winners.id === carId) {
      console.log(winners.id);
      const newWin = Number(winners.wins) + 1;
      const newTime = timeCar < Number(winners.time) ? timeCar : Number(winners.time);
      await this.winners.updateWinner(carId, { time: newTime, wins: newWin });
    } else {
      await this.winners.createWinner({ id: carId, time: timeCar, wins: 1 });
    }
  }

  async resetCar(carId: number) {
    const startBtn = document.querySelector(`.btn-car-start[data-id="${carId}"]`) as HTMLButtonElement;
    const stopBtn = document.querySelector(`.btn-car-reset[data-id="${carId}"]`) as HTMLButtonElement;
    const raceCar = document.querySelector(`.car-racing__item[data-id="${carId}"]`) as HTMLDivElement;

    this.carRace[carId] = false;
    stopBtn.disabled = true;
    startBtn.disabled = false;

    await this.engine.stopEngine(carId);
    cancelAnimationFrame(this.animations[carId]);
    raceCar.style.left = '0px';
  }

  async resetRace() {
    const startRaceBtn = document.querySelector('.btn-race-start') as HTMLButtonElement;
    const carsData = await this.garage.getCars(store.garagePage);
    startRaceBtn.disabled = false;
    carsData.items.forEach((element) => this.resetCar(element.id));
  }
}

export default ControllerGarage;

class GarageScreen {
  render() {
    const page = document.querySelector('.page__container') as HTMLDivElement;

    page.innerHTML = `
    <div class="garage">
      <div class="garage__controls"></div>
      <div class="garage__racing"></div>
      <div class="garage__pagination"></div>
    </div>
  `;
  }
}

const garageScreen = new GarageScreen();
export default garageScreen;

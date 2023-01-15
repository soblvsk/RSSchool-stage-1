class WinnersScreen {
  render() {
    const page = document.querySelector('.page__container') as HTMLDivElement;

    page.innerHTML += `
    <div class="winners" style="display: none;">
      <div class="winners__video">
        <video src="../../../assets/JDM_Video.mp4" autoplay loop muted></video>
      </div>
      <h2 class="winners__title font_XXL">Winners</h2>
      <div class="winners__table">
        <table class="table">
          <thead>
            <tr>
              <th class="table__header">№</th>
              <th class="table__header">Car</th>
              <th class="table__header">Name</th>
              <th class="table__header">
                <div class="table-sort-wins">
                  Wins
                  <img class="wins-arrow" src="../../../assets/arrow.svg" alt="↓">
                </div>
              </th>
              <th class="table__header">
                <div class="table-sort-time">
                  Time
                  <img class="time-arrow" src="../../../assets/arrow.svg" alt="↓">
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="table__body"></tbody>
        </table>
      </div>
      <div class="winners__total"></div>
      <div class="winners__pagination"></div>
    </div>
  `;
  }
}

const winnersScreen = new WinnersScreen();
export default winnersScreen;

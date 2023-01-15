import { WinnersData } from '../../../constants/interfaces';

class WinnersTotal {
  render(data: WinnersData) {
    const total = document.querySelector('.winners__total') as HTMLDivElement;

    total.innerHTML = `
    <p class="font_S">Winners: <span clas="cars-winner">${data.count}</span></p>
  `;
  }
}

const winnersTotalComponent = new WinnersTotal();
export default winnersTotalComponent;

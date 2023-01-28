import { Winner, WinnersData } from '../../../core/interfaces';
import { drawCar } from '../../../core/utils';

class WinnersCars {
  drawWinnerItem(winner: Winner, index: number) {
    return `
    <td class="table__item">${index}</td>
    <td class="table__item">
      <div class="table__img">
        ${drawCar(winner.color)}
      </div>
    </td>
    <td class="table__item">${winner.name}</td>
    <td class="table__item">${winner.wins}</td>
    <td class="table__item">${winner.time}</td>
    `;
  }

  render(data: WinnersData, index: number) {
    const tableBody = document.querySelector('.table__body') as HTMLTableElement;

    tableBody.innerHTML = `
    ${data.items
      .map(
        (item, i) => `<tr>
        ${this.drawWinnerItem(item, i + index)}
      </tr>`
      )
      .join('\n')}`;
  }
}
const winnersCarsComponent = new WinnersCars();
export default winnersCarsComponent;

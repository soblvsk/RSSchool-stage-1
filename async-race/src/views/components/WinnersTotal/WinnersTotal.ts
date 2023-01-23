class WinnersTotal {
  render(data: string) {
    const total = document.querySelector('.winners__total') as HTMLDivElement;

    total.innerHTML = `
    <p class="font_S">Winners: <span clas="cars-winner">${data}</span></p>
  `;
  }
}

const winnersTotalComponent = new WinnersTotal();
export default winnersTotalComponent;

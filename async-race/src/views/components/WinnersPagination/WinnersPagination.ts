class WinnersPagination {
  render(page: number, count: number) {
    const pagination = document.querySelector('.winners__pagination') as HTMLDivElement;

    pagination.innerHTML = `
    <button class="btn btn_L btn_primary btn-winners-prev" disabled>Prev</button>
    <div class="font_M">${page} / ${count}</div>
    <button class="btn btn_L btn_primary btn-winners-next">Next</button>
  `;
  }
}

const winnersPaginationComponent = new WinnersPagination();
export default winnersPaginationComponent;

class GaragePagination {
  render(page: number, count: number) {
    const pagination = document.querySelector('.garage__pagination') as HTMLDivElement;

    pagination.innerHTML = `
    <button class="btn btn_L btn_primary btn-garage-prev"> < </button>
    <div class="pag-item font_M">${count === 0 ? '0 / 0' : `${page} / ${count}`}</div>
    <button class="btn btn_L btn_primary btn-garage-next"> > </button>
  `;
  }
}

const garagePaginationComponent = new GaragePagination();
export default garagePaginationComponent;

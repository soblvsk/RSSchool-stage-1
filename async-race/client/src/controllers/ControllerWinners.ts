import Winners from '../api/Winners';
import constants from '../core/constants';
import store from '../core/store';
import winnersCarsComponent from '../views/components/WinnersCars/WinnersCars';
import winnersPaginationComponent from '../views/components/WinnersPagination/WinnersPagination';
import winnersTotalComponent from '../views/components/WinnersTotal/WinnersTotal';

class ControllerWinners {
  private winners: Winners;

  constructor() {
    this.winners = new Winners();
  }

  async start() {
    await this.loading();

    (document.querySelector('.winners') as HTMLDivElement).addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.closest('.table-sort-wins')) this.sortWins();
      if (target.closest('.table-sort-time')) this.sortTime();
      if (target.closest('.btn-winners-prev')) this.pagination('prev');
      if (target.closest('.btn-winners-next')) this.pagination('next');
    });
  }

  async loading() {
    const winners = await this.winners.getWinnersData(store.winnersPage, store.sort, store.order);
    store.countPagesWinners = Math.ceil(Number(winners.totalCount) / constants.winnersInPage);

    const index = 1 + (store.winnersPage - 1) * constants.winnersInPage;
    winnersCarsComponent.render(winners, index);
    winnersTotalComponent.render(winners.totalCount);
    winnersPaginationComponent.render(store.winnersPage, store.countPagesWinners);

    const btnPrev = document.querySelector('.btn-winners-prev') as HTMLButtonElement;
    if (store.winnersPage === 1) btnPrev.disabled = true;
    else btnPrev.disabled = false;

    const btnNext = document.querySelector('.btn-winners-next') as HTMLButtonElement;
    if (Number(winners.totalCount) > store.countPagesWinners) btnNext.disabled = false;
    if (store.winnersPage >= store.countPagesWinners) btnNext.disabled = true;

    const winsArrow = document.querySelector('.wins-arrow') as HTMLImageElement;
    const timeArrow = document.querySelector('.time-arrow') as HTMLImageElement;
    if (store.sort === 'time') {
      winsArrow.style.visibility = 'hidden';
      timeArrow.style.visibility = 'visible';
    } else {
      winsArrow.style.visibility = 'visible';
      timeArrow.style.visibility = 'hidden';
    }

    if (store.order === 'ASC') {
      timeArrow.classList.remove('sort-active');
      winsArrow.classList.remove('sort-active');
    } else {
      timeArrow.classList.add('sort-active');
      winsArrow.classList.add('sort-active');
    }
  }

  async sortWins() {
    store.sort = 'wins';
    if (store.order === 'ASC') store.order = 'DESC';
    else store.order = 'ASC';
    await this.loading();
  }

  async sortTime() {
    store.sort = 'time';
    if (store.order === 'ASC') store.order = 'DESC';
    else store.order = 'ASC';
    await this.loading();
  }

  async pagination(btn: string) {
    const btnPrev = document.querySelector('.btn-winners-prev') as HTMLButtonElement;
    const btnNext = document.querySelector('.btn-winners-next') as HTMLButtonElement;

    if (btn === 'prev') {
      if (store.winnersPage === 1) btnPrev.disabled = true;
      if (store.winnersPage > 1) {
        store.winnersPage -= 1;
        btnNext.disabled = false;
        await this.loading();
      }
    } else {
      if (store.winnersPage === store.countPagesWinners) btnNext.disabled = true;
      if (store.winnersPage < store.countPagesWinners) {
        store.winnersPage += 1;
        btnPrev.disabled = false;
        await this.loading();
      }
    }
  }
}

export default ControllerWinners;

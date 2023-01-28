import constants from '../core/constants';
import { Order, Sort, Winner, WinnersData } from '../core/interfaces';
import Garage from './Garage';

class Winners {
  private url: string;

  private winners: string;

  private garage: Garage;

  constructor() {
    this.url = constants.url;
    this.winners = `${this.url}/winners`;
    this.garage = new Garage();
  }

  async getWinner(winnerId: number): Promise<Winner> {
    const response = await fetch(`${this.winners}/${winnerId}`);
    return (await response.json()) as Winner;
  }

  async getWinnersData(page: number, sort: Sort, order: Order, limit = 10): Promise<WinnersData> {
    const response = await fetch(`${this.winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    let winners = (await response.json()) as Winner[];

    winners = await Promise.all(
      winners.map(async (winner) => {
        const car = await this.garage.getCar(winner.id);
        return {
          ...winner,
          name: car.name,
          color: car.color,
        };
      })
    );

    return {
      items: winners,
      totalCount: response.headers.get('X-Total-Count') as string,
    };
  }

  async updateWinner(winnerId: number, body: { time: number; wins: number }): Promise<void> {
    await fetch(`${this.winners}/${winnerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  async createWinner(body: { id: number; time: number; wins: number }): Promise<Winner> {
    const response = await fetch(this.winners, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return (await response.json()) as Winner;
  }

  async deleteWinner(winnerId: number): Promise<void> {
    await fetch(`${this.winners}/${winnerId}`, { method: 'DELETE' });
  }
}
export default Winners;

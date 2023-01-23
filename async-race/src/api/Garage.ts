import { Car, CarsData } from '../constants/interfaces';

class Garage {
  private url: string;

  private garage: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000';
    this.garage = `${this.url}/garage`;
  }

  async getCar(carId: number): Promise<Car> {
    const response = await fetch(`${this.garage}/${carId}`);
    return (await response.json()) as Car;
  }

  async getCars(page: number, limit = 7): Promise<CarsData> {
    const response = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`);
    return {
      items: (await response.json()) as Car[],
      count: response.headers.get('X-Total-Count') as string,
    };
  }

  async updateCar(carId: number, body: { name: string; color: string }): Promise<void> {
    await fetch(`${this.garage}/${carId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  async createCar(body: { name: string; color: string }) {
    const response = await fetch(this.garage, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return (await response.json()) as Car;
  }

  async deleteCar(carId: number): Promise<void> {
    await fetch(`${this.garage}/${carId}`, {
      method: 'DELETE',
    });
  }
}

export default Garage;

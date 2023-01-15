import { EngineCar } from '../constants/interfaces';

class Engine {
  private url: string;
  private engine: string;

  constructor() {
    this.url = 'http://127.0.0.1:3000';
    this.engine = `${this.url}/engine`;
  }

  async startEngine(engineId: number): Promise<EngineCar> {
    const response = await fetch(`${this.engine}?id=${engineId}&status=started`, { method: 'PATCH' });
    return await response.json();
  }

  async stopEngine(engineId: number): Promise<EngineCar> {
    const response = await fetch(`${this.engine}?id=${engineId}&status=stopped`, { method: 'PATCH' });
    return await response.json();
  }

  async driveEngine(engineId: number): Promise<number> {
    const response = await fetch(`${this.engine}?id=${engineId}&status=drive`, { method: 'PATCH' });
    return response.status;
  }
}

export default Engine;

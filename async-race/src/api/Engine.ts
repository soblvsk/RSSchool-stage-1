import constants from '../core/constants';
import { EngineCar } from '../core/interfaces';

class Engine {
  private url: string;

  private engine: string;

  constructor() {
    this.url = constants.url;
    this.engine = `${this.url}/engine`;
  }

  async startEngine(engineId: number): Promise<EngineCar> {
    const response = await fetch(`${this.engine}?id=${engineId}&status=started`, { method: 'PATCH' });
    return (await response.json()) as EngineCar;
  }

  async stopEngine(engineId: number): Promise<EngineCar> {
    const response = await fetch(`${this.engine}?id=${engineId}&status=stopped`, { method: 'PATCH' });
    return (await response.json()) as EngineCar;
  }

  async driveEngine(engineId: number): Promise<number> {
    const response = await fetch(`${this.engine}?id=${engineId}&status=drive`, { method: 'PATCH' });
    return response.status;
  }
}

export default Engine;

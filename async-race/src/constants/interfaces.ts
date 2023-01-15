export interface Car {
  id: number;
  name: string;
  color: string;
}

export interface updateCar {
  name: string;
  color: string;
}

export interface Winner {
  id: number;
  time: string;
  wins: string;
  name?: string;
  color: string;
}

export interface CarsData {
  items: Car[];
  count: string | null;
}

export interface WinnersData {
  items: Winner[];
  count: string | null;
}

export interface EngineCar {
  velocity: number;
  distance: number;
}

export type Sort = 'time' | 'wins';
export type Order = 'ASC' | 'DESC';

export type Store = {
  garagePage: number;
  countPagesGarage: number;
  winnersPage: number;
  countPagesWinners: number;
  sort: Sort;
  order: Order;
};

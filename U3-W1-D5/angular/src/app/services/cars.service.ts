import { Injectable } from '@angular/core';
import { iCars } from '../models/iCars';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  apiUrl: string = '../../assets/json/db.json';
  carsArray: iCars[] = [];

  // Get the data from the JSON file
  constructor() {
    this.getFromJson();
  }

  async getFromJson(): Promise<void> {
    let response = await fetch(this.apiUrl);
    let data = <iCars[]>await response.json();
    if (data) this.carsArray = data;
  }

  // Return the cars array
  getCarsArray(): iCars[] {
    return this.carsArray;
  }

  // Return the car brands
  getBrand(brand: string): iCars[] {
    return this.carsArray.filter((car) => car.brand == brand);
  }

  // Return the car models
  getModel(model: string): iCars | undefined {
    const modelFound = this.carsArray.find((car) => car.model == model);
    if (modelFound) return modelFound;
    return undefined;
  }

  // Get two random cars from the cars array
  getRandomCars(): iCars[] {
    const shuffled = [...this.carsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }
}

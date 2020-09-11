import { Injectable } from '@angular/core';
import { House } from './model/house';
import { HOUSES } from './data/houses';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor() { 
  }

  getHouses(): House[] {
    return HOUSES;
  }
}

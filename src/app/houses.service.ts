import { Injectable } from '@angular/core';
import { House } from './house';
import { HOUSES } from './houses';

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

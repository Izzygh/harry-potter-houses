import { Component, OnInit} from '@angular/core';
import { House } from '../../model/house';
import { HOUSES } from '../../data/houses';
import { HousesService } from '../../houses.service';


@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
    houses: House[];
    selectedHouse: House; 

    constructor(private housesService: HousesService) { }

    ngOnInit(): void {
        this.getHouses();

    }

    getHouses = (): void => {
        this.houses = this.housesService.getHouses();
    }

    onSelect = ($event: House): void => {
        this.selectedHouse = $event;
    }

}
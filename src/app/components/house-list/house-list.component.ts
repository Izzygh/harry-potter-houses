import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { House } from "src/app/model/house";
@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  @Input() houses: House[];
  @Output() selectedEvent = new EventEmitter<House>();

  selectedHouse: House;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect = (house: House): void => {
    this.selectedHouse = house;
    this.selectedEvent.emit(this.selectedHouse)
  }
}

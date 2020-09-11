import { Component, OnInit, Input } from '@angular/core';
import { House } from "src/app/model/house";
@Component({
  selector: 'app-house-editor',
  templateUrl: './house-editor.component.html',
  styleUrls: ['./house-editor.component.css']
})
export class HouseEditorComponent implements OnInit {

  @Input() selectedHouse: House

  
  constructor() { }

  ngOnInit(): void {
  }

}

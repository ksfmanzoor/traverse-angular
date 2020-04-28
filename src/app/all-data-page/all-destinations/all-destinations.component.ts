import {Component, Input, OnInit} from '@angular/core';
import {MinifiedHomeData} from '../../models/minified-home-data';

@Component({
  selector: 'app-all-destinations',
  templateUrl: './all-destinations.component.html',
  styleUrls: ['./all-destinations.component.css']
})
export class AllDestinationsComponent implements OnInit {
  @Input() allDestinationList: MinifiedHomeData[];
  rowNumber: number;
  constructor() { }

  ngOnInit(): void {
    this.rowNumber = Math.ceil(this.allDestinationList.length / 3);
  }

}

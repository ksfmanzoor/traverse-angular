import {Component, Input, OnInit} from '@angular/core';
import {Trip} from 'src/app/models/search-result';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input() minifiedTrip: Trip;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MinifiedTrip} from 'src/app/models/minified-trip';

@Component({
  selector: 'app-all-trips-page',
  templateUrl: './all-trips-page.component.html',
  styleUrls: ['./all-trips-page.component.css']
})
export class AllTripsPageComponent implements OnInit {
  headerInfo = {title: 'Traverse Pakistan Trips', coverImage: 'assets/header.jpg'};
  minifiedTrips: MinifiedTrip[];
  totalRows: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.minifiedTrips = data.trips;
      this.totalRows = Math.ceil(this.minifiedTrips.length / 3);
    });
  }

}

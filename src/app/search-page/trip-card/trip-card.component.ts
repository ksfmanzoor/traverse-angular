import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Trip} from 'src/app/models/search-result';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input() minifiedTrip: Trip;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/trip', this.minifiedTrip.slug]).then();
  }

}

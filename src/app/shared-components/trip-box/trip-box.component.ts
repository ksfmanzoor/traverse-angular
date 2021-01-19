import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MinifiedTrip} from 'src/app/models/minified-trip';

@Component({
  selector: 'app-trip-box',
  templateUrl: './trip-box.component.html',
  styleUrls: ['./trip-box.component.css']
})
export class TripBoxComponent implements OnInit {
  @Input() minifiedTrip: MinifiedTrip;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/trip', this.minifiedTrip.slug]).then();
  }

}

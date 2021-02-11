import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TripBooking} from 'src/app/models/trip-booking';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  tripBookings: TripBooking[];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.tripBookings = data.bookings;
    });
  }

  navigateToTrip(slug) {
    this.router.navigate(['trip', slug]).then();
  }

  navigateToBooking(id) {
    this.router.navigate(['/booking/success', id]).then();
  }

}

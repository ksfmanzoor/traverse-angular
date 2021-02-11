import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TripBooking} from 'src/app/models/trip-booking';
import {NavBarService} from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-successful-booking-page',
  templateUrl: './successful-booking-page.component.html',
  styleUrls: ['./successful-booking-page.component.css']
})
export class SuccessfulBookingPageComponent implements OnInit, OnDestroy {
  bookedTrip: TripBooking;

  constructor(private navBarService: NavBarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
    this.route.data.subscribe(data => {
      this.bookedTrip = data.booking;
    });
  }

  ngOnDestroy(): void {
    this.navBarService.changeNavColor.next('transparent');
  }

}

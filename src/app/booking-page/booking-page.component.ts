import {Component, OnDestroy, OnInit} from '@angular/core';
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {BookedTrip, PassedTripData} from 'src/app/models/booked-trip';
import {NavBarService} from 'src/app/services/nav-bar.service';
import {UtilityService} from 'src/app/services/utility.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit, OnDestroy {
  plusIcon = faPlus;
  minusIcon = faMinus;
  passedTripData: PassedTripData = {};


  constructor(private navBarService: NavBarService, public utilityService: UtilityService) { }

  ngOnInit(): void {
    this.passedTripData = history.state;
    this.navBarService.changeNavColor.next('#333333');
  }

  createTripBooking() {
    const bookingTrip: BookedTrip = {
      trip: this.passedTripData.trip.id,
      package: this.passedTripData.packageId,
      departure: this.passedTripData.departureId
    };
    console.log(bookingTrip);
  }

  ngOnDestroy(): void {
    this.navBarService.changeNavColor.next('transparent');
  }

}

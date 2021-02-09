import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {CreateTripBooking, PassedTripData} from 'src/app/models/create-trip-booking';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {NavBarService} from 'src/app/services/nav-bar.service';
import {TripBookingService} from 'src/app/services/trip-booking.service';
import {UtilityService} from 'src/app/services/utility.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit, OnDestroy {
  plusIcon = faPlus;
  minusIcon = faMinus;
  noOfAdults = 1;
  noOfChildren = 0;
  basePrice = 0;
  totalPrice = 0;
  passedTripData: PassedTripData = {};
  bookingForm: FormGroup;


  constructor(private navBarService: NavBarService, public utilityService: UtilityService,
              private tripBookingService: TripBookingService, private authenticationService: AuthenticationService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.passedTripData = history.state;
    this.basePrice = (this.utilityService.packageFinder(this.passedTripData.trip.packages,
      this.passedTripData.packageId).price_per_person) +
      (this.utilityService.departureFinder(this.passedTripData.trip.departures,
        this.passedTripData.departureId).price_per_person);
    this.totalPrice = this.basePrice;
    this.navBarService.changeNavColor.next('#333333');
    this.bookingForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
    });
  }

  get formControl() {
    return this.bookingForm.controls;
  }

  createTripBooking() {
    if (this.formControl.name.valid) {
      if (this.formControl.phoneNumber.value !== '' || !!this.authenticationService.currentUserValue) {
        const bookingTrip: CreateTripBooking = {
          trip: this.passedTripData.trip.id,
          package: this.passedTripData.packageId,
          departure: this.passedTripData.departureId,
          name: this.formControl.name.value,
          phone_number: this.formControl.phoneNumber.value,
          email: this.formControl.email.value,
          number_of_persons: this.noOfAdults,
          number_of_children: this.noOfChildren,
        };
        this.tripBookingService.postTripBooking(bookingTrip).subscribe(data => {
          console.log(data);
          this.router.navigate(['success', this.passedTripData.trip.id], {relativeTo: this.route}).then();
        });
      } else {
        alert('Phone Number is required');
      }
    } else {
      alert('Name is required');
    }
  }

  incrementAdults() {
    this.noOfAdults++;
    this.totalPriceUpdate();
  }

  decrementAdults() {
    if (this.noOfAdults !== 1) {
      this.noOfAdults--;
    }
    this.totalPriceUpdate();
  }

  incrementChildren() {
    this.noOfChildren++;
    this.totalPriceUpdate();
  }

  decrementChildren() {
    if (this.noOfChildren !== 0) {
      this.noOfChildren--;
    }
    this.totalPriceUpdate();
  }

  totalPriceUpdate() {
    this.totalPrice = (this.basePrice * this.noOfAdults) + ((Math.ceil(this.basePrice / 2)) * this.noOfChildren);
  }


  ngOnDestroy(): void {
    this.navBarService.changeNavColor.next('transparent');
  }

}

import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {CreateTripBooking, PassedTripData} from 'src/app/models/create-trip-booking';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {NavBarService} from 'src/app/services/nav-bar.service';
import {PopupBookingService} from 'src/app/services/popup-booking.service';
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
  signUpInfo = {
    heading: 'Sign Up',
    subtitle: 'Create a new account',
    altText: 'Already',
    route: '/authentication/login',
    keyWord: 'Sign In'
  };

  signInInfo = {
    heading: 'Sign In',
    subtitle: 'Log in to your account',
    altText: 'Don\'t',
    route: '/authentication/signup',
    keyWord: 'Sign Up'
  };
  isSignUpMode = true;


  constructor(private navBarService: NavBarService, public utilityService: UtilityService,
              private tripBookingService: TripBookingService, private authenticationService: AuthenticationService,
              private router: Router, private route: ActivatedRoute, private popupBookingService: PopupBookingService) { }

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
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl(''),
    });
  }

  get formControl() {
    return this.bookingForm.controls;
  }

  createTripBooking(signUpRef) {
    if (this.formControl.name.valid) {
      if (this.formControl.phoneNumber.valid) {
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
        if (!!this.authenticationService.currentUserValue) {
          this.tripBookingService.postTripBooking(bookingTrip).subscribe((data: CreateTripBooking) => {
            this.router.navigate(['success', data.id], {relativeTo: this.route}).then();
          });
        } else {
          signUpRef.open();
          this.popupBookingService.isPopUpMode = true;
          this.popupBookingService.bookingTrip = bookingTrip;
        }
      } else {
        this.bookingForm.markAllAsTouched();
      }
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }

  incrementAdults(event) {
    this.noOfAdults++;
    this.totalPriceUpdate();
    event.stopPropagation();
  }

  decrementAdults(event) {
    if (this.noOfAdults !== 1) {
      this.noOfAdults--;
    }
    this.totalPriceUpdate();
    event.stopPropagation();
  }

  incrementChildren(event) {
    this.noOfChildren++;
    this.totalPriceUpdate();
    event.stopPropagation();
  }

  decrementChildren(event) {
    if (this.noOfChildren !== 0) {
      this.noOfChildren--;
    }
    this.totalPriceUpdate();
    event.stopPropagation();
  }

  totalPriceUpdate() {
    this.totalPrice = (this.basePrice * this.noOfAdults) + ((Math.ceil(this.basePrice / 2)) * this.noOfChildren);
  }

  toggleSignUpSignInMode() {
    this.isSignUpMode = !this.isSignUpMode;
  }

  ngOnDestroy(): void {
    this.navBarService.changeNavColor.next('transparent');
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons/faAngleRight';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons/faCaretDown';
import {faPlaneDeparture} from '@fortawesome/free-solid-svg-icons/faPlaneDeparture';
import {faUserAlt} from '@fortawesome/free-solid-svg-icons/faUserAlt';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Trip} from 'src/app/models/trip';
import {NavBarService} from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit, OnDestroy {
  backButton = faAngleLeft;
  nextButton = faAngleRight;
  dropDownButton = faCaretDown;
  expandButton = faAngleDown;
  userIcon = faUserAlt;
  departureIcon = faPlaneDeparture;
  screenWidth: number;
  tripData: Trip;
  departureId: string;
  departureName: string;
  departureDate: Date;
  arrivalDate: Date;
  pricePerPerson: number;
  noOfPersons = 1;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: false,
    autoplay: true,
    rtl: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
  };

  constructor(private navBarService: NavBarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
    this.screenWidth = window.innerWidth;
    this.route.data.subscribe(data => {
      this.tripData = data.trip;
      this.departureId = this.tripData.departures[0].id;
      this.departureName = this.tripData.departures[0].location;
      this.pricePerPerson = this.tripData.departures[0].price_per_person;
      this.departureDate = this.tripData.departures[0].departure_date;
      this.arrivalDate = this.tripData.departures[0].arrival_date;
    });
  }

  selectDeparture(id, name, price, departureDate, arrivalDate) {
    this.departureId = id;
    this.departureName = name;
    this.pricePerPerson = price;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
  }

  incrementPerson() {
    this.noOfPersons++;
  }

  decrementPerson() {
    if (this.noOfPersons !== 1) {
      this.noOfPersons--;
    }
  }

  ngOnDestroy(): void {
    this.navBarService.changeNavColor.next('transparent');
  }

}

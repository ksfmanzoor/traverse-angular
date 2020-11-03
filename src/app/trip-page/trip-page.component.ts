import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  departureMethod: string;
  departureDate: Date;
  arrivalDate: Date;
  pricePerPersonOfDeparture: number;
  packageId: string;
  packageName: string;
  pricePerPersonOfPackage: number;
  noOfPersons = 1;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    dots: false,
    autoplay: true,
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

  serviceCarouselOptions: OwlOptions = {
    stagePadding: 0,
    loop: false,
    navSpeed: 700,
    dots: false,
    autoplay: true,
    rewind: true,
  };


  constructor(private navBarService: NavBarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
    this.screenWidth = window.innerWidth;
    this.route.data.subscribe(data => {
      this.tripData = data.trip;
      for (const i of this.tripData.departures) {
        if (i.is_standard) {
          this.departureId = i.id;
          this.departureName = i.location;
          this.departureMethod = i.via;
          this.departureDate = i.departure_date;
          this.arrivalDate = i.arrival_date;
          this.pricePerPersonOfDeparture = i.price_per_person;
        }
      }
      for (const i of this.tripData.packages) {
        if (i.is_standard) {
          this.packageId = i.id;
          this.packageName = i.title;
          this.pricePerPersonOfPackage = i.price_per_person;
        }
      }
    });
  }

  selectDeparture(id, name, method, price, departureDate, arrivalDate) {
    this.departureId = id;
    this.departureName = name;
    this.departureMethod = method;
    this.pricePerPersonOfDeparture = price;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
  }

  selectPackage(id, name, price) {
    this.packageId = id;
    this.packageName = name;
    this.pricePerPersonOfPackage = price;
  }

  incrementPerson() {
    this.noOfPersons++;
  }

  decrementPerson() {
    if (this.noOfPersons !== 1) {
      this.noOfPersons--;
    }
  }

  navigate(slug) {
    this.router.navigate(['/attraction', slug]).then();
  }

  ngOnDestroy(): void {
    this.navBarService.changeNavColor.next('transparent');
  }

}

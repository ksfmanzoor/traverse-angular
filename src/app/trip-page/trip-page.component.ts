import {Component, OnDestroy, OnInit} from '@angular/core';
import {faCalendar} from '@fortawesome/free-regular-svg-icons/faCalendar';
import {faUser} from '@fortawesome/free-regular-svg-icons/faUser';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons/faAngleRight';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {NavBarService} from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit, OnDestroy {
  backButton = faAngleLeft;
  nextButton = faAngleRight;
  expandButton = faAngleDown;
  userIcon = faUser;
  calendarIcon = faCalendar;

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

  constructor(private navBarService: NavBarService) { }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
  }

  ngOnDestroy(): void {
    this.navBarService.changeNavColor.next('transparent');
  }

}

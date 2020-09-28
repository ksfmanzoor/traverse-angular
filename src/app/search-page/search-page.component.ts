import {Component, OnDestroy, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {NavBarService} from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {

  constructor(private navBarService: NavBarService) { }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
  }

  ngOnDestroy(): void {
    this.navBarService.changeNavColor.next('transparent');
  }

}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Trip} from 'src/app/models/search-result';
import {NavBarService} from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  minifiedTrips: Trip[];
  searchText = '';

  constructor(private navBarService: NavBarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
    this.route.params.subscribe(data => {
      this.searchText = data.query;
    });
    this.route.data.subscribe(data => {
      const result = data.search;
      this.minifiedTrips = result.trips;
    });
  }

  ngOnDestroy(): void {
    this.navBarService.changeNavColor.next('transparent');
  }

}

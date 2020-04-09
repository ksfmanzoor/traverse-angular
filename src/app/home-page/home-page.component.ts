import { Component, OnInit } from '@angular/core';
import {HomepageDataService} from '../services/homepage-data.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loading = true;
  destinationData: any;
  constructor(private homepageDataService: HomepageDataService) { }

  ngOnInit(): void {
    this.homepageDataService.fetchHomePlaces().subscribe(data => {
      this.destinationData = data;
      this.loading = false;
    });
  }
}

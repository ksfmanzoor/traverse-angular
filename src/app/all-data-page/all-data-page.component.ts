import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MinifiedHomeData} from '../models/minified-home-data';

@Component({
  selector: 'app-all-destinations-page',
  templateUrl: './all-data-page.component.html',
  styleUrls: ['./all-data-page.component.css']
})
export class AllDataPageComponent implements OnInit {
  allDestinationList: MinifiedHomeData[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.allDestinationList = data.destinations;
    });
  }

}

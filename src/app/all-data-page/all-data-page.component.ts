import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MinifiedHomeData} from '../models/minified-home-data';

@Component({
  selector: 'app-all-destinations-page',
  templateUrl: './all-data-page.component.html',
  styleUrls: ['./all-data-page.component.css']
})

export class AllDataPageComponent implements OnInit {
  headerInfo: {title: string, coverImage: string};
  destinationTitle = {title: 'Our Destinations', subtitle: 'Browse through the Bounteous Realm'};
  allDestinationList: MinifiedHomeData[];
  attractionTitle = {title: 'Our Attractions', subtitle: 'Lorem Ipsum Gypsum Sit'};
  allAttractionList: MinifiedHomeData[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const result = data.destinations;
      console.log(result);
      this.headerInfo = {title: result[0].tag_line, coverImage: result[0].cover_image};
      this.allDestinationList = result[1];
    });
  }

}

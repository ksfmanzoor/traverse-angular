import {Component, OnInit} from '@angular/core';
import {Attraction, GalleryImage} from '../models/destination';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.css']
})
export class DestinationPageComponent implements OnInit {
  headerInfo: { title, subtitle: string, imageUrl: string };
  aboutUS: { description: string, imageUrl: string };
  galleryInfo: { title: string, galleryImages: GalleryImage[] };
  attractionsInfo: { title: string, attractions: Attraction[] };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const result = data.destination;
      this.headerInfo = {title: result.name, subtitle: result.subtitle, imageUrl: result.cover_image};
      this.aboutUS = {description: result.about, imageUrl: result.about_image};
      this.attractionsInfo = {title: result.name, attractions: result.attractions};
      this.galleryInfo = {title: result.name, galleryImages: result.gallery_images};
    });
  }


}

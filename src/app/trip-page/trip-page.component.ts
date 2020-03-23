import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlaceService} from '../services/place.service';
import {delay} from 'rxjs/operators';
import {Convert, GalleryImage} from '../models/place';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit {
  loader;
  headerInfo: {title, subtitle: string, imageUrl: string};
  aboutUS: {description: string, imageUrl: string};
  galleryInfo: {title: string, images: GalleryImage[]};
  constructor(private placeService: PlaceService) {
  }

  async ngOnInit(): Promise<void> {
    const response = await this.placeService.fetchPlace().subscribe((data) => {
      const result = Convert.toPlace(JSON.stringify(data));
      this.headerInfo = {title: result[0].name, subtitle: 'Lorem Ipusm sit', imageUrl: result[0].cover_image};
      this.aboutUS = {description: result[0].about, imageUrl: result[0].about_image};
      this.galleryInfo = {title: result[0].name, images: result[0].gallery_images};
    });
  }

}

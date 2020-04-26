import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalleryImage} from '../models/attraction';

@Component({
  selector: 'app-attraction-page',
  templateUrl: './attraction-page.component.html',
  styleUrls: ['./attraction-page.component.css']
})
export class AttractionPageComponent implements OnInit {
  headerInfo: {title: string, subtitle: string, imageUrl: string};
  aboutDescription: string;
  aboutImages: GalleryImage[];
  rowNumber: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const result = data.attraction;
      this.headerInfo = {title: result.name, subtitle: result.subtitle, imageUrl: result.cover_image};
      this.aboutDescription = result.about;
      this.aboutImages = result.gallery_images;
      this.rowNumber = Math.ceil(this.aboutImages.length / 4);
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {GalleryImage} from '../models/destination';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-destination-page',
    templateUrl: './destination-page.component.html',
    styleUrls: ['./destination-page.component.css']
})
export class DestinationPageComponent implements OnInit {
    headerInfo: { title, subtitle: string, imageUrl: string };
    aboutUS: { description: string, imageUrl: string };
    galleryInfo: { title: string, images: GalleryImage[] };

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            const result = data.destination;
            this.headerInfo = {title: result[0].name, subtitle: result[0].subtitle, imageUrl: result[0].cover_image};
            this.aboutUS = {description: result[0].about, imageUrl: result[0].about_image};
            this.galleryInfo = {title: result[0].name, images: result[0].gallery_images};
        });
    }


}

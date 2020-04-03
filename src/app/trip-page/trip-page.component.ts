import {Component, OnInit} from '@angular/core';
import {Convert, GalleryImage} from '../models/place';
import { LoadingBarService } from '@ngx-loading-bar/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';

@Component({
    selector: 'app-trip-page',
    templateUrl: './trip-page.component.html',
    styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit {
    headerInfo: { title, subtitle: string, imageUrl: string };
    aboutUS: { description: string, imageUrl: string };
    galleryInfo: { title: string, images: GalleryImage[] };

    constructor(private route: ActivatedRoute, private loadingBarService: LoadingBarService, private  router: Router) {
    }

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            const result = Convert.toPlace(JSON.stringify(data.place));
            this.headerInfo = {title: result[0].name, subtitle: result[0].subtitle, imageUrl: result[0].cover_image};
            this.aboutUS = {description: result[0].about, imageUrl: result[0].about_image};
            this.galleryInfo = {title: result[0].name, images: result[0].gallery_images};
        });
    }


}

import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {GalleryImage} from '../../models/destination';

@Component({
    selector: 'app-attractions',
    templateUrl: './attractions.component.html',
    styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        navSpeed: 700,
        dots: false,
        autoplay: true,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            740: {
                items: 3
            },
            940: {
                items: 3
            }
        },
    };
    @Input() attractionsInfo: { title: string, images: GalleryImage[] };

    constructor() {
    }

    ngOnInit(): void {
    }

}

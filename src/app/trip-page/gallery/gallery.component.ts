import {Component, HostListener, Input, OnInit} from '@angular/core';
import {GalleryImage} from '../../models/place';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    @Input() galleryInfo: { title: string, images: GalleryImage[] };

    constructor() {
    }

    ngOnInit(): void {
    }

}

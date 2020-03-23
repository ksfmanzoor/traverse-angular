import {Component, HostListener, Input, OnInit} from '@angular/core';
import {GalleryImage} from '../../models/place';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    height = '158px';
    @Input() galleryInfo: {title: string, images: GalleryImage[]};
    screenWidth;
    noOfRows;

    constructor() {
    }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
        this.heightDecider();
        console.log('j');
        this.rowDecider();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.heightDecider();
    }

    heightDecider() {
        if (this.galleryInfo.images.length <= 5 && this.screenWidth > 568) {
            this.height = '280px';
        } else if (this.galleryInfo.images.length === 5 && this.screenWidth <= 568) {
            this.height = '156px';
        } else {
            this.height = '156px';
        }
        this.rowDecider();
    }

    rowDecider() {
        if (this.galleryInfo.images.length <= 5) {
            this.noOfRows = new Array(1);
        } else if ((this.galleryInfo.images.length > 5) && (this.galleryInfo.images.length <= 10)) {
            this.noOfRows = new Array(2);
        } else {
            this.noOfRows = new Array(3);
        }
    }

}

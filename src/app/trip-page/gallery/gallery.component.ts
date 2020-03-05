import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    height = '158px';
    path = 'header.jpg';
    screenWidth;
    rows;
    columns = new Array(5);
    images = [this.path, this.path, this.path, this.path, this.path, this.path, this.path, this.path, this.path, this.path,
      this.path, this.path, this.path, this.path, this.path];

    constructor() {}

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
        this.heightDecider();
        this.rowDecider();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.heightDecider();
    }

    heightDecider() {
        if (this.images.length === 5 && this.screenWidth > 568) {
            this.height = '316px';
        } else if (this.images.length === 5 && this.screenWidth <= 568) {
            this.height = '156px';
        } else {
            this.height = '156px';
        }
    }

    rowDecider() {
        if (this.images.length === 5) {
            this.rows = new Array(1);
        } else if ((this.images.length > 5) && (this.images.length <= 10)) {
            this.rows = new Array(2);
        } else {
            this.rows = new Array(3);
        }
    }

}

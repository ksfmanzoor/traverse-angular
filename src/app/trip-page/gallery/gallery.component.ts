import {Component, HostListener, Input, OnInit} from '@angular/core';
import {GalleryImage} from '../../models/place';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    @Input() galleryInfo: { title: string, images: GalleryImage[] };
    items: GalleryItem[];

    constructor(private gallery: Gallery) {
    }

    ngOnInit(): void {
        this.items = this.galleryInfo.images.map(item => new ImageItem({src: item.image, thumb: item.image}));
        this.basicLightBoxExample();
    }

    basicLightBoxExample() {
        this.gallery.ref().load(this.items);
    }

}

import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {GalleryImage} from '../../models/place';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    @ViewChild('itemTemplate', {static: true}) itemTemplate: TemplateRef<any>;
    @Input() galleryInfo: { title: string, images: GalleryImage[] };
    items: GalleryItem[];

    constructor(private gallery: Gallery) {
    }

    ngOnInit(): void {
        this.items = this.galleryInfo.images.map(item => new ImageItem(
            {src: item.image, thumb: item.image, text: item.alt_text}
            ),
        );
        this.loadLightBox();
    }

    loadLightBox() {
        this.gallery.ref().setConfig({itemTemplate: this.itemTemplate});
        this.gallery.ref().load(this.items);
    }

}

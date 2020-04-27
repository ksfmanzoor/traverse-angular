import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {GalleryImage} from '../../models/destination';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {HelperService} from '../../services/helper.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    @ViewChild('itemTemplate', {static: true}) itemTemplate: TemplateRef<any>;
    @Input() galleryInfo: { title: string, galleryImages: GalleryImage[] };
    items: GalleryItem[];
    rowNumber: number;
    galleryId = 'placePhotos';


    constructor(private gallery: Gallery, private helper: HelperService) {
    }

    ngOnInit(): void {
        this.items = this.galleryInfo.galleryImages.map(item => new ImageItem(
            {src: item.image, thumb: item.image, text: item.alt_text}
            ),
        );
        this.rowNumber = this.helper.rowDecider(this.items.length, 5);
        this.loadLightBox();
    }

    loadLightBox() {
        this.gallery.ref(this.galleryId).setConfig({itemTemplate: this.itemTemplate});
        this.gallery.ref(this.galleryId).load(this.items);
    }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalleryImage} from '../models/attraction';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {HelperService} from '../services/helper.service';

@Component({
    selector: 'app-attraction-page',
    templateUrl: './attraction-page.component.html',
    styleUrls: ['./attraction-page.component.css']
})
export class AttractionPageComponent implements OnInit {
    headerInfo: { title: string, subtitle: string, imageUrl: string };
    aboutDescription: string;
    aboutImages: GalleryImage[];
    items: GalleryItem[];
    rowNumber: number;
    galleryId = 'attractionPhotos';

    constructor(private route: ActivatedRoute, private gallery: Gallery, private helper: HelperService) {
    }

    ngOnInit(): void {
        this.route.data.subscribe(data => {
            const result = data.attraction;
            this.headerInfo = {title: result.name, subtitle: result.subtitle, imageUrl: result.cover_image};
            this.aboutDescription = result.about;
            this.aboutImages = result.gallery_images;
            this.items = result.gallery_images.map(item => new ImageItem(
                {src: item.image, thumb: item.image, text: item.alt_text}
                ),
            );
            this.rowNumber = this.helper.rowDecider(this.aboutImages.length, 4);
            this.loadLightBox();
        });
    }

    loadLightBox() {
        this.gallery.ref(this.galleryId).load(this.items);
    }

}

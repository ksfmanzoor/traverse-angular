import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalleryImage} from '../models/attraction';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';

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
    private galleryId = 'attractionPhotos';

    constructor(private route: ActivatedRoute, private gallery: Gallery) {
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
            this.rowNumber = Math.ceil(this.aboutImages.length / 4);
            this.loadLightBox();
        });
    }

    loadLightBox() {
        this.gallery.ref(this.galleryId).load(this.items);
    }

}

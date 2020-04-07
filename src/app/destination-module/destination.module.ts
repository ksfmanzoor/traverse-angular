import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DestinationRoutingModule} from './destination-routing.module';
import {AboutUsComponent} from '../destination-page/about-us/about-us.component';
import {GalleryComponent} from '../destination-page/gallery/gallery.component';
import {PlacesComponent} from '../destination-page/places/places.component';
import {PlacesHeaderComponent} from '../destination-page/places-header/places-header.component';
import {DestinationPageComponent} from '../destination-page/destination-page.component';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {SharedModule} from '../shared-module/shared.module';
import {CarouselModule} from 'ngx-owl-carousel-o';


@NgModule({
    declarations: [
        PlacesHeaderComponent,
        AboutUsComponent,
        GalleryComponent,
        PlacesComponent,
        DestinationPageComponent,
    ],
    imports: [
        CommonModule,
        DestinationRoutingModule,
        SharedModule,
        CarouselModule,
        GalleryModule,
        LightboxModule.withConfig({
            panelClass: 'fullscreen'
        })
    ],
})
export class DestinationModule {
    constructor() {
        console.log('DestinationModule');
    }
}

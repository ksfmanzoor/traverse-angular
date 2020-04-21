import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DestinationRoutingModule} from './destination-routing.module';
import {AboutUsComponent} from '../destination-page/about-us/about-us.component';
import {GalleryComponent} from '../destination-page/gallery/gallery.component';
import {DestinationPageComponent} from '../destination-page/destination-page.component';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {SharedModule} from '../shared-module/shared.module';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {DestinationHeaderComponent} from '../destination-page/destination-header/destination-header.component';
import {AttractionsComponent} from '../destination-page/attractions/attractions.component';


@NgModule({
    declarations: [
        DestinationHeaderComponent,
        AboutUsComponent,
        GalleryComponent,
        AttractionsComponent,
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
}

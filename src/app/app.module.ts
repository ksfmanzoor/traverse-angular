import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './Home Page/header/header.component';
import {DestinationsComponent} from './Home Page/destinations/destinations.component';
import {DestinationImageComponent} from './Home Page/destination-image/destination-image.component';
import {ExperiencesComponent} from './Home Page/experiences/experiences.component';
import {BestTripsComponent} from './Home Page/best-trips/best-trips.component';
import {FooterComponent} from './footer/footer.component';
import {TripPageComponent} from './Trip Page/trip-page/trip-page.component';
import {AboutUsComponent} from './Trip Page/about-us/about-us.component';
import {PlacesComponent} from './Trip Page/places/places.component';
import {GalleryComponent} from './Trip Page/gallery/gallery.component';
import {GalleryImageComponent} from './Trip Page/gallery-image/gallery-image.component';
import {HomePageComponent} from './Home Page/home-page/home-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DestinationsComponent,
        DestinationImageComponent,
        ExperiencesComponent,
        BestTripsComponent,
        FooterComponent,
        TripPageComponent,
        AboutUsComponent,
        PlacesComponent,
        GalleryComponent,
        GalleryImageComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

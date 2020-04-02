import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {HeaderComponent} from './header/header.component';
import {DestinationsComponent} from './home-page/destinations/destinations.component';
import {DestinationImageComponent} from './home-page/destination-image/destination-image.component';
import {ExperiencesComponent} from './home-page/experiences/experiences.component';
import {BestTripsComponent} from './home-page/best-trips/best-trips.component';
import {FooterComponent} from './footer/footer.component';
import {GalleryComponent} from './trip-page/gallery/gallery.component';
import {TripPageComponent} from './trip-page/trip-page.component';
import {AboutUsComponent} from './trip-page/about-us/about-us.component';
import {PlacesComponent} from './trip-page/places/places.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {PlacesHeaderComponent} from './trip-page/places-header/places-header.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SearchHeaderComponent} from './search-page/search-header/search-header.component';
import {DestinationPageComponent} from './destination-page/destination-page.component';
import {BlogCarouselComponent} from './home-page/blog-carousel/blog-carousel.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {AngularFittextModule} from 'angular-fittext';

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
        HomePageComponent,
        SearchPageComponent,
        PlacesHeaderComponent,
        NavBarComponent,
        SearchHeaderComponent,
        DestinationPageComponent,
        BlogCarouselComponent,
        BlogPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        NgxSpinnerModule,
        AngularFittextModule,
        GalleryModule,
        LightboxModule.withConfig({
            panelClass: 'fullscreen'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

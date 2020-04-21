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
import {HomePageComponent} from './home-page/home-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {SearchHeaderComponent} from './search-page/search-header/search-header.component';
import {BlogCarouselComponent} from './home-page/blog-carousel/blog-carousel.component';
import {HttpClientModule} from '@angular/common/http';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {AllDestinationsPageComponent} from './all-destinations-page/all-destinations-page.component';
import {SharedModule} from './shared-module/shared.module';
import { AttractionPageComponent } from './attraction-page/attraction-page.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DestinationsComponent,
        DestinationImageComponent,
        ExperiencesComponent,
        BestTripsComponent,
        HomePageComponent,
        SearchPageComponent,
        SearchHeaderComponent,
        BlogCarouselComponent,
        AllDestinationsPageComponent,
        AttractionPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        HttpClientModule,
        LoadingBarRouterModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HeaderComponent} from '../home-page/header/header.component';
import {DestinationsComponent} from '../home-page/destinations/destinations.component';
import {ExperiencesComponent} from '../home-page/experiences/experiences.component';
import {BestTripsComponent} from '../home-page/best-trips/best-trips.component';
import {HomePageComponent} from '../home-page/home-page.component';
import {BlogCarouselComponent} from '../home-page/blog-carousel/blog-carousel.component';
import {SharedModule} from '../shared-module/shared.module';
import {CarouselModule} from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HeaderComponent,
    DestinationsComponent,
    BlogCarouselComponent,
    ExperiencesComponent,
    BestTripsComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule,
  ]
})
export class HomeModule { }

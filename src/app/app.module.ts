import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DestinationImageComponent } from './destination-image/destination-image.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { BestTripsComponent } from './best-trips/best-trips.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DestinationsComponent,
    DestinationImageComponent,
    ExperiencesComponent,
    BestTripsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

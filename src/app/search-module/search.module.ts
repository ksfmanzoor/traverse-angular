import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SearchPageComponent} from 'src/app/search-page/search-page.component';
import {TripCardComponent} from 'src/app/search-page/trip-card/trip-card.component';
import {SharedModule} from 'src/app/shared-module/shared.module';

import {SearchRoutingModule} from './search-routing.module';


@NgModule({
  declarations: [
    SearchPageComponent,
    TripCardComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule
  ]
})
export class SearchModule {
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SearchHeaderComponent} from 'src/app/search-page/search-header/search-header.component';
import {SearchPageComponent} from 'src/app/search-page/search-page.component';
import {TripCardComponent} from 'src/app/search-page/trip-card/trip-card.component';

import {SearchRoutingModule} from './search-routing.module';


@NgModule({
  declarations: [
    SearchPageComponent,
    SearchHeaderComponent,
    TripCardComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FontAwesomeModule
  ]
})
export class SearchModule {
}

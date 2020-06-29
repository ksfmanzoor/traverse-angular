import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SearchHeaderComponent} from 'src/app/search-page/search-header/search-header.component';
import {SearchPageComponent} from 'src/app/search-page/search-page.component';

import { SearchRoutingModule } from './search-routing.module';


@NgModule({
  declarations: [
    SearchPageComponent,
    SearchHeaderComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    CarouselModule
  ]
})
export class SearchModule { }

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxPictureModule} from 'ngx-picture';
import {TripBoxComponent} from 'src/app/shared-components/trip-box/trip-box.component';
import {AllDataDisplayComponent} from '../shared-components/all-data-display/all-data-display.component';
import {DefaultHeaderComponent} from '../shared-components/default-header/default-header.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {ImageBoxComponent} from '../shared-components/image-box/image-box.component';
import {SmallHeaderComponent} from '../shared-components/small-header/small-header.component';
import {ngxPictureConfig} from './picture-manuplation';


@NgModule({
  declarations: [
    FooterComponent,
    DefaultHeaderComponent,
    ImageBoxComponent,
    SmallHeaderComponent,
    AllDataDisplayComponent,
    TripBoxComponent,
  ],
  imports: [
    CommonModule,
    NgxPictureModule.forRoot(ngxPictureConfig),
    FontAwesomeModule,
  ],
  exports: [
    FooterComponent,
    DefaultHeaderComponent,
    ImageBoxComponent,
    SmallHeaderComponent,
    AllDataDisplayComponent,
    FontAwesomeModule,
    NgxPictureModule,
    TripBoxComponent
  ]
})
export class SharedModule {
}

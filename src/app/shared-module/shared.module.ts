import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {DefaultHeaderComponent} from '../shared-components/default-header/default-header.component';
import {ImageBoxComponent} from '../shared-components/image-box/image-box.component';
import {SmallHeaderComponent} from '../shared-components/small-header/small-header.component';
import {AllDataDisplayComponent} from '../shared-components/all-data-display/all-data-display.component';
import {NgxPictureModule} from 'ngx-picture';
import {ngxPictureConfig} from './picture-manuplation';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    FooterComponent,
    DefaultHeaderComponent,
    ImageBoxComponent,
    SmallHeaderComponent,
    AllDataDisplayComponent,
  ],
  imports: [
    CommonModule,
    NgxPictureModule.forRoot(ngxPictureConfig),
    FontAwesomeModule
  ],
  exports: [
    FooterComponent,
    DefaultHeaderComponent,
    ImageBoxComponent,
    SmallHeaderComponent,
    AllDataDisplayComponent,
    FontAwesomeModule,
    NgxPictureModule
  ]
})
export class SharedModule {
}

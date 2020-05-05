import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from '../shared-components/nav-bar/nav-bar.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {DefaultHeaderComponent} from '../shared-components/default-header/default-header.component';
import {ImageBoxComponent} from '../shared-components/image-box/image-box.component';
import {SmallHeaderComponent} from '../shared-components/small-header/small-header.component';
import {AllDataDisplayComponent} from '../shared-components/all-data-display/all-data-display.component';
import {DEFAULT_BREAKPOINTS, NgxPictureModule} from 'ngx-picture';
import {srcInterpolator} from '../app.module';


@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent,
        DefaultHeaderComponent,
        ImageBoxComponent,
        SmallHeaderComponent,
        AllDataDisplayComponent
    ],
    imports: [
        CommonModule,
        NgxPictureModule.forRoot({
            breakpoints: DEFAULT_BREAKPOINTS,
            imageFormats: ['webp', 'jpeg'],
            srcInterpolator
        })
    ],
    exports: [
        NavBarComponent,
        FooterComponent,
        DefaultHeaderComponent,
        ImageBoxComponent,
        SmallHeaderComponent,
        AllDataDisplayComponent
    ]
})
export class SharedModule {
}

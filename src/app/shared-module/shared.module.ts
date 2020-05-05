import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from '../shared-components/nav-bar/nav-bar.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {DefaultHeaderComponent} from '../shared-components/default-header/default-header.component';
import {ImageBoxComponent} from '../shared-components/image-box/image-box.component';
import {SmallHeaderComponent} from '../shared-components/small-header/small-header.component';
import {AllDataDisplayComponent} from '../shared-components/all-data-display/all-data-display.component';
import {DEFAULT_BREAKPOINTS, ImageFormat, NgxPictureModule} from 'ngx-picture';


export function srcInterpolator(url: string, imageFormat: ImageFormat, breakpoint: string, breakpointValue: number) {
    const imageBucket = 'traverse-bucket';
    const baseUrl = ' https://d1mmsd446qaauk.cloudfront.net/';
    const imageKey = url.split('.com/')[1];
    const jsonObject = {bucket: imageBucket, key: imageKey, edits: {
            resize: {
                width: breakpointValue,
                fit: 'cover',
            }
        }};
    const stringify = btoa(JSON.stringify(jsonObject));
    return baseUrl + stringify;
}


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

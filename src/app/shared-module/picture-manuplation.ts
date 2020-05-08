import {ImageFormat, NgxPictureConfig} from 'ngx-picture';
import {Breakpoints} from '@angular/cdk/layout';

export interface Dimensions {
    h: number;
    w: number;
}

export const ngxPictureConfig: NgxPictureConfig<Dimensions> = {
    breakpoints: {
        [Breakpoints.XSmall]: {h: 254, w: 576},
        [Breakpoints.Small]: {h: 254, w: 768},
        [Breakpoints.Medium]: {h: 254, w: 992},
        [Breakpoints.Large]: {h: 450, w: 1200},
    },
    imageFormats: ['webp', 'jpg'],
    srcInterpolator: (url: string, imageFormat: ImageFormat, breakpoint: string, breakpointValue: Dimensions) => {
        const imageBucket = 'traverse-bucket';
        const baseUrl = 'https://d1mmsd446qaauk.cloudfront.net/';
        const imageKey = url.split('.com/')[1];
        const jsonObject = {
            bucket: imageBucket, key: imageKey, edits: {
                resize: {
                    width: breakpointValue.w,
                    height: breakpointValue.h,
                }
            }
        };
        return baseUrl + btoa(JSON.stringify(jsonObject));
    }
};

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchPageComponent} from './search-page/search-page.component';
import {SearchHeaderComponent} from './search-page/search-header/search-header.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared-module/shared.module';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {RouteReuseStrategy} from '@angular/router';
import {CustomReuseStrategy} from './custom-reuse-strategy';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {AllBlogPageComponent} from './all-blog-page/all-blog-page.component';

export function srcInterpolator(url: string, breakpoint: string, breakpointValue: number) {
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
        AppComponent,
        SearchPageComponent,
        SearchHeaderComponent,
        AllBlogPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LoadingBarHttpClientModule,
        CarouselModule,
        SharedModule,
    ],
    providers: [{
        provide: RouteReuseStrategy,
        useClass: CustomReuseStrategy
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}

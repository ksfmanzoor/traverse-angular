import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared-module/shared.module';
import {BlogHeaderComponent} from '../blog-page/blog-header/blog-header.component';
import {BlogPageComponent} from '../blog-page/blog-page.component';
import {BlogRoutingModule} from './blog-routing-module';


@NgModule({
    declarations: [
        BlogHeaderComponent,
        BlogPageComponent
    ],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule
    ]
})
export class BlogModule {
}

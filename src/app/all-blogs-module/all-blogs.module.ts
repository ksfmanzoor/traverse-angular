import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllBlogPageComponent} from 'src/app/all-blog-page/all-blog-page.component';
import {SharedModule} from 'src/app/shared-module/shared.module';

import {AllBlogsRoutingModule} from './all-blogs-routing.module';


@NgModule({
  declarations: [
    AllBlogPageComponent,
  ],
  imports: [
    CommonModule,
    AllBlogsRoutingModule,
    SharedModule
  ]
})
export class AllBlogsModule {
}

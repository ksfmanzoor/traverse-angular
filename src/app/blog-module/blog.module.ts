import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared-module/shared.module';
import {BlogPageComponent} from '../blog-page/blog-page.component';
import {BlogRoutingModule} from './blog-routing-module';
import {SafeHtmlPipe} from './safe-html.pipe';


@NgModule({
  declarations: [
    BlogPageComponent,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class BlogModule {
}

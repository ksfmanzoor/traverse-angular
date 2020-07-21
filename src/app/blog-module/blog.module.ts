import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BlogCommentsComponent} from 'src/app/blog-page/blog-comments/blog-comments.component';
import {BlogPageComponent} from '../blog-page/blog-page.component';
import {SharedModule} from '../shared-module/shared.module';
import {BlogRoutingModule} from './blog-routing-module';
import {SafeHtmlPipe} from './safe-html.pipe';


@NgModule({
  declarations: [
    BlogPageComponent,
    BlogCommentsComponent,
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

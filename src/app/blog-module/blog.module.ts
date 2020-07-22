import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxSocialShareModule} from 'ngx-social-share';
import {BlogRoutingModule} from 'src/app/blog-module/blog-routing-module';
import {SafeHtmlPipe} from 'src/app/blog-module/safe-html.pipe';
import {BlogCommentsComponent} from 'src/app/blog-page/blog-comments/blog-comments.component';
import {BlogPageComponent} from 'src/app/blog-page/blog-page.component';
import {SharedModule} from 'src/app/shared-module/shared.module';


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
    FormsModule,
    NgxSocialShareModule
  ]
})
export class BlogModule {
}

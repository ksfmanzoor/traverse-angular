import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {TagInputModule} from 'ngx-chips';
import {AddBlogRoutingModule} from 'src/app/add-blog-module/add-blog-routing.module';
import {AddBlogPageComponent} from 'src/app/add-blog-page/add-blog-page.component';


@NgModule({
  declarations: [
    AddBlogPageComponent
  ],
  imports: [
    CommonModule,
    AddBlogRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
  ]
})
export class AddBlogModule {
}

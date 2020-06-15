import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddBlogRoutingModule} from './add-blog-routing.module';
import {AddBlogPageComponent} from '../add-blog-page/add-blog-page.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';

export let InjectorInstance: Injector;

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
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}

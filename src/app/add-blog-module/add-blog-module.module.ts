import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddBlogModuleRoutingModule} from './add-blog-module-routing.module';
import {AddBlogPageComponent} from '../add-blog-page/add-blog-page.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

export let InjectorInstance: Injector;

@NgModule({
  declarations: [
    AddBlogPageComponent
  ],
  imports: [
    CommonModule,
    AddBlogModuleRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddBlogModuleModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}

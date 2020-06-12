import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBlogPageComponent} from '../add-blog-page/add-blog-page.component';


const routes: Routes = [
  {
    path: '', component: AddBlogPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBlogRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllBlogPageComponent} from 'src/app/all-blog-page/all-blog-page.component';


const routes: Routes = [
  {
    path: '', component: AllBlogPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllBlogsRoutingModule { }

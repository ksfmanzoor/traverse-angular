import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogPageComponent} from '../blog-page/blog-page.component';


const routes: Routes = [
    {
        path: '', component: BlogPageComponent,
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }

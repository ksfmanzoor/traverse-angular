import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllDataPageComponent} from '../all-data-page/all-data-page.component';


const routes: Routes = [
  {
    path: '', component: AllDataPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllDataRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllTripsPageComponent} from 'src/app/all-trips-page/all-trips-page.component';


const routes: Routes = [
  {
    path: '', component: AllTripsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTripsRoutingModule { }

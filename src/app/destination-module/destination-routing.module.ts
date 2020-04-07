import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DestinationPageComponent} from '../destination-page/destination-page.component';


const routes: Routes = [
  {
    path: '', component: DestinationPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }

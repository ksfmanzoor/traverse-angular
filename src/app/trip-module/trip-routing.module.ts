import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TripPageComponent} from 'src/app/trip-page/trip-page.component';


const routes: Routes = [
  {
    path: '', component: TripPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule {
}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {TripPageComponent} from './trip-page/trip-page.component';



const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'places', component: TripPageComponent}
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

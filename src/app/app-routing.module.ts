import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {TripPageComponent} from './trip-page/trip-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {DestinationPageComponent} from './destination-page/destination-page.component';
import {BlogPageComponent} from './blog-page/blog-page.component';


const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'search', component: SearchPageComponent},
    {path: 'place', component: TripPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'destinations', component: DestinationPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

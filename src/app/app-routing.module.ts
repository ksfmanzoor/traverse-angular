import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {PlaceResolverService} from './services/place-resolver.service';
import {AllDestinationsPageComponent} from './all-destinations-page/all-destinations-page.component';


const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'search', component: SearchPageComponent},
    {
        path: 'place', loadChildren: () => import('./destination-module/destination.module').then(m => m.DestinationModule),
        resolve: {place: PlaceResolverService}
    },
    {path: 'blog', component: BlogPageComponent},
    {path: 'destinations', component: AllDestinationsPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
    }), ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

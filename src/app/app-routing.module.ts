import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {DestinationResolverService} from './services/destination-resolver.service';
import {AllDestinationsPageComponent} from './all-destinations-page/all-destinations-page.component';
import {BlogResolverService} from './services/blog-resolver.service';
import {AllDestinationsResolverService} from './services/all-destinations-resolver.service';
import {AttractionResolverService} from './services/attraction-resolver.service';


const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'search', component: SearchPageComponent},
    {
        path: 'destination/:id', loadChildren: () =>
            import('./destination-module/destination.module').then(m => m.DestinationModule),
        resolve: {destination: DestinationResolverService}
    },
    {
        path: 'blog/:id', loadChildren: () =>
            import('./blog-module/blog.module').then(m => m.BlogModule),
        resolve: {blog: BlogResolverService}
    },
    {
        path: 'destinations', component: AllDestinationsPageComponent, resolve: {
            destinations: AllDestinationsResolverService
        }
    },
    {
        path: 'attraction/:id',
        loadChildren: () =>
            import('./attraction-module/attraction.module').then(m => m.AttractionModule),
        resolve: {
            attraction: AttractionResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
    }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

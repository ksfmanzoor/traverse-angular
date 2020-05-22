import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {SearchPageComponent} from './search-page/search-page.component';
import {DestinationResolverService} from './services/destination-resolver.service';
import {BlogResolverService} from './services/blog-resolver.service';
import {AllDestinationsResolverService} from './services/all-destinations-resolver.service';
import {AttractionResolverService} from './services/attraction-resolver.service';
import {AllBlogPageComponent} from './all-blog-page/all-blog-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {SignupPageComponent} from './signup-page/signup-page.component';
import {ResetPageComponent} from './reset-page/reset-page.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home-module/home.module').then(m => m.HomeModule),
    data: {key: 'home'}
  },
  {path: 'search', component: SearchPageComponent},
  {
    path: 'destination/:id', loadChildren: () =>
      import('./destination-module/destination.module').then(m => m.DestinationModule),
    resolve: {destination: DestinationResolverService},
  },
  {
    path: 'blog/:id', loadChildren: () =>
      import('./blog-module/blog.module').then(m => m.BlogModule),
    resolve: {blog: BlogResolverService}
  },
  {
    path: 'destinations', loadChildren: () =>
      import('./all-data-module/all-data.module').then(m => m.AllDataModule), resolve: {
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
  },
  {
    path: 'blogs', component: AllBlogPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'signup', component: SignupPageComponent
  },
  {
    path: 'reset/password', component: ResetPageComponent
  },
  {
    path: 'reset/password/:resetToken', component: ResetPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
  }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

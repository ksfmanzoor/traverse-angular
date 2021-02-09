import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {BookingPageComponent} from 'src/app/booking-page/booking-page.component';
import {AllTripResolverService} from 'src/app/services/all-trip-resolver.service';
import {SearchResolverService} from 'src/app/services/search-resolver.service';
import {TripResolverService} from 'src/app/services/trip-resolver.service';
import {AllBlogsResolverService} from './services/all-blogs-resolver.service';
import {AllDestinationsResolverService} from './services/all-destinations-resolver.service';
import {AttractionResolverService} from './services/attraction-resolver.service';
import {BlogResolverService} from './services/blog-resolver.service';
import {DestinationResolverService} from './services/destination-resolver.service';
import {AuthGuard} from './services/guards/auth.guard';
import {VerifiedUserGuard} from './services/guards/verified-user-guard.service';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home-module/home.module').then(m => m.HomeModule),
    data: {key: 'home'}
  },
  {
    path: 'search/:query',
    loadChildren: () => import('./search-module/search.module').then(m => m.SearchModule),
    resolve: {search: SearchResolverService}
  },
  {
    path: 'destination/:slug', loadChildren: () =>
      import('./destination-module/destination.module').then(m => m.DestinationModule),
    resolve: {destination: DestinationResolverService},
  },
  {
    path: 'blog/:slug', loadChildren: () =>
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
    path: 'attraction/:slug',
    loadChildren: () =>
      import('./attraction-module/attraction.module').then(m => m.AttractionModule),
    resolve: {
      attraction: AttractionResolverService
    }
  },
  {
    path: 'trips',
    loadChildren: () => import('./all-trips-module/all-trips.module').then(m => m.AllTripsModule), resolve: {
      trips: AllTripResolverService
    }
  },
  {
    path: 'trip/:slug',
    loadChildren: () => import('./trip-module/trip.module').then(m => m.TripModule), resolve: {
      trip: TripResolverService
    }
  },
  {
    path: 'booking', loadChildren: () => import('./booking-module/booking.module').then(m => m.BookingModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./all-blogs-module/all-blogs.module').then(m => m.AllBlogsModule),
    resolve: {blogs: AllBlogsResolverService}
  },
  {
    path: 'authentication',
    loadChildren: () => import('./auth-module/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'profile', canActivate: [AuthGuard],
    loadChildren: () => import('./profile-module/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'add-blog', canActivate: [VerifiedUserGuard],
    loadChildren: () => import('./add-blog-module/add-blog.module').then(m => m.AddBlogModule),
  },
  {
    path: 'reset/password',
    loadChildren: () => import('./reset-password-module/reset-password.module').then(m => m.ResetPasswordModule)
  },
  {
    path: 'verify-user/:verificationID',
    loadChildren: () => import('./verify-user-module/verify-user.module').then(m => m.VerifyUserModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./legal-module/legal.module').then(m => m.LegalModule)
  },
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

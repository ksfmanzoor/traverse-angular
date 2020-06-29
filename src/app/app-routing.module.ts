import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PrivacyComponent} from './legal-pages/privacy/privacy.component';
import {TermsAndConditionsComponent} from './legal-pages/terms-and-conditions/terms-and-conditions.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ResetPageComponent} from './reset-page/reset-page.component';
import {SearchPageComponent} from './search-page/search-page.component';
import {AllBlogsResolverService} from './services/all-blogs-resolver.service';
import {AllDestinationsResolverService} from './services/all-destinations-resolver.service';
import {AttractionResolverService} from './services/attraction-resolver.service';
import {BlogResolverService} from './services/blog-resolver.service';
import {DestinationResolverService} from './services/destination-resolver.service';
import {AuthGuard} from './services/guards/auth.guard';
import {VerifiedUserGuard} from './services/guards/verified-user-guard.service';
import {SignupPageComponent} from './signup-page/signup-page.component';
import {VerifyUserComponent} from './verify-user/verify-user.component';


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
    path: 'blogs',
    loadChildren: () => import('./all-blogs-module/all-blogs.module').then(m => m.AllBlogsModule),
    resolve: {blogs: AllBlogsResolverService}
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
  },
  {
    path: 'verify-user/:verificationID', component: VerifyUserComponent
  },
  {
    path: 'privacy', component: PrivacyComponent
  },
  {
    path: 'termsandconditions', component: TermsAndConditionsComponent
  },
  {
    path: 'add-blog', canActivate: [VerifiedUserGuard],
    loadChildren: () => import('./add-blog-module/add-blog.module').then(m => m.AddBlogModule),
  },
  {
    path: 'profile', canActivate: [AuthGuard],
    loadChildren: () => import('./profile-module/profile.module').then(m => m.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    // preloadingStrategy: PreloadAllModules
  }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

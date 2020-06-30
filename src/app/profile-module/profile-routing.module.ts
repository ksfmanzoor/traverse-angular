import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {YourBlogsResolverService} from 'src/app/services/your-blogs-resolver.service';
import {PreferencesComponent} from '../profile-page/preferences/preferences.component';
import {ProfilePageComponent} from '../profile-page/profile-page.component';
import {YourBlogsComponent} from '../profile-page/your-blogs/your-blogs.component';


const routes: Routes = [
  {
    path: '', component: ProfilePageComponent, children: [
      {
        path: '',
        redirectTo: 'your-blogs',
        pathMatch: 'full'
      },
      {
        path: 'your-blogs', component: YourBlogsComponent, resolve: {yourBlogs: YourBlogsResolverService}
      },
      {
        path: 'preferences', component: PreferencesComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}

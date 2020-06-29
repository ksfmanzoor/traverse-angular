import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfilePageComponent} from '../profile-page/profile-page.component';
import {YourBlogsComponent} from '../profile-page/your-blogs/your-blogs.component';
import {PreferencesComponent} from '../profile-page/preferences/preferences.component';


const routes: Routes = [
  {
    path: '', component: ProfilePageComponent, children: [
      {
        path: '',
        redirectTo: 'your-blogs',
        pathMatch: 'full'
      },
      {
        path: 'your-blogs', component: YourBlogsComponent,
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

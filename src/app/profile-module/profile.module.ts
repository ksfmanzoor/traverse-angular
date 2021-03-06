import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookingHistoryComponent} from 'src/app/profile-page/booking-history/booking-history.component';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfilePageComponent} from '../profile-page/profile-page.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {YourBlogsComponent} from '../profile-page/your-blogs/your-blogs.component';
import {PreferencesComponent} from '../profile-page/preferences/preferences.component';


@NgModule({
  declarations: [
    ProfilePageComponent,
    YourBlogsComponent,
    PreferencesComponent,
    BookingHistoryComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule {
}

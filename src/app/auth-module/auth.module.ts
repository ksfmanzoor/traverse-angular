import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {AuthSkeletonComponent} from 'src/app/auth-module/auth-skeleton/auth-skeleton.component';
import {SocialAuthComponent} from 'src/app/auth-module/social-auth/social-auth.component';
import {LoginPageComponent} from 'src/app/login-page/login-page.component';
import {SignupPageComponent} from 'src/app/signup-page/signup-page.component';

import {AuthRoutingModule} from './auth-routing.module';


@NgModule({
  declarations: [
    AuthSkeletonComponent,
    SocialAuthComponent,
    SignupPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AuthModule {
}

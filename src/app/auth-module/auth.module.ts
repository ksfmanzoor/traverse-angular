import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AuthSkeletonComponent} from 'src/app/auth-module/auth-skeleton/auth-skeleton.component';
import {SocialAuthComponent} from 'src/app/auth-module/social-auth/social-auth.component';
import {LoginFormComponent} from 'src/app/login-page/login-form/login-form.component';
import {LoginPageComponent} from 'src/app/login-page/login-page.component';
import {SharedModule} from 'src/app/shared-module/shared.module';
import {SignupFormComponent} from 'src/app/signup-page/signup-form/signup-form.component';
import {SignupPageComponent} from 'src/app/signup-page/signup-page.component';

import {AuthRoutingModule} from './auth-routing.module';


@NgModule({
  declarations: [
    AuthSkeletonComponent,
    SocialAuthComponent,
    SignupPageComponent,
    LoginPageComponent,
    SignupFormComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    SignupPageComponent,
    SocialAuthComponent,
    SignupFormComponent,
    LoginFormComponent
  ]
})
export class AuthModule {
}

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouteReuseStrategy} from '@angular/router';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {AuthSkeletonComponent} from 'src/app/login-page/auth-skeleton/auth-skeleton.component';
import {SocialAuthComponent} from 'src/app/login-page/social-auth/social-auth.component';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomReuseStrategy} from './custom-reuse-strategy';
import {LoginPageComponent} from './login-page/login-page.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ResetPageComponent} from './reset-page/reset-page.component';
import {ResetPasswordConfirmComponent} from './reset-page/reset-password-confirm/reset-password-confirm.component';
import {ResetPasswordRequestComponent} from './reset-page/reset-password-request/reset-password-request.component';
import {AuthenticationInterceptorService} from './services/authentication-interceptor.service';
import {SharedModule} from './shared-module/shared.module';
import {SignupPageComponent} from './signup-page/signup-page.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('766271108501-0ua5neplagq5pib3ra2o2pbp3bmk8ji0.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2898965933491614')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    SignupPageComponent,
    AuthSkeletonComponent,
    SocialAuthComponent,
    ResetPageComponent,
    ResetPasswordRequestComponent,
    ResetPasswordConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomReuseStrategy
  }, {
    provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true
  }, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

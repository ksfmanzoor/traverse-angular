import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouteReuseStrategy} from '@angular/router';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {AuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import {provideConfig} from 'src/app/social-account-config';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomReuseStrategy} from './custom-reuse-strategy';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ResetPageComponent} from './reset-page/reset-page.component';
import {ResetPasswordConfirmComponent} from './reset-page/reset-password-confirm/reset-password-confirm.component';
import {ResetPasswordRequestComponent} from './reset-page/reset-password-request/reset-password-request.component';
import {AuthenticationInterceptorService} from './services/authentication-interceptor.service';
import {SharedModule} from './shared-module/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
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
    SocialLoginModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: CustomReuseStrategy
  }, {
    provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true
  }, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

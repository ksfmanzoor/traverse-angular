import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchPageComponent} from './search-page/search-page.component';
import {SearchHeaderComponent} from './search-page/search-header/search-header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared-module/shared.module';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {RouteReuseStrategy} from '@angular/router';
import {CustomReuseStrategy} from './custom-reuse-strategy';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {AllBlogPageComponent} from './all-blog-page/all-blog-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SocialLoginComponent } from './login-page/social-login/social-login.component';
import { LoginSkeletonComponent } from './login-page/login-skeleton/login-skeleton.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResetPageComponent } from './reset-page/reset-page.component';
import { ResetPasswordRequestComponent } from './reset-page/reset-password-request/reset-password-request.component';
import { ResetPasswordConfirmComponent } from './reset-page/reset-password-confirm/reset-password-confirm.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {AuthenticationInterceptorService} from './services/authentication-interceptor.service';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import { PrivacyComponent } from './legal-pages/privacy/privacy.component';
import { TermsofserviceComponent } from './legal-pages/termsofservice/termsofservice.component';

const config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('522226866097-8pclmu5udp6pa5pqsubjadm5s98m0dtj.apps.googleusercontent.com')
    },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2708016946148277')
  }
]);

export function provideConfig() {
    return config;
}

@NgModule({
    declarations: [
        AppComponent,
        SearchPageComponent,
        SearchHeaderComponent,
        NavBarComponent,
        AllBlogPageComponent,
        LoginPageComponent,
        SocialLoginComponent,
        LoginSkeletonComponent,
        SignupPageComponent,
        ResetPageComponent,
        ResetPasswordRequestComponent,
        ResetPasswordConfirmComponent,
        PrivacyComponent,
        TermsofserviceComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LoadingBarHttpClientModule,
        CarouselModule,
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
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}

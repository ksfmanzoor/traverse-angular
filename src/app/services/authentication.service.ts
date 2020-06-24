import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angularx-social-login';
import {Router} from '@angular/router';

export interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/';
  private tokenSubject: BehaviorSubject<any>;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  public verifiedUser;

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.tokenSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')));
    this.verifiedUser = !!this.currentUserValue ? this.currentUserValue.is_verified : false;
  }

  signUp(signUpData) {
    return this.httpClient.post(this.baseUrl + 'user/', signUpData);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get tokenValue(): Token {
    return this.tokenSubject.value;
  }

  login(loginData) {
    return this.httpClient.post(this.baseUrl + 'token/', loginData).pipe(map((tokenObject: Token) => {
      localStorage.setItem('token', JSON.stringify(tokenObject));
      this.tokenSubject.next(tokenObject);
    }), mergeMap(data => this.httpClient.get(this.baseUrl + 'user/'))).subscribe((user: User ) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.verifiedUser = user.is_verified;
      console.log(user);
      this.router.navigate(['/']).then();
      return user;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.tokenSubject.next(null);
    this.router.navigate(['/']).then();
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      this.httpClient.post(this.baseUrl + 'user/', {
        email: data.email,
        password: data.idToken.substring(0, 30),
        name: data.name,
        google_token: data.idToken,
        is_google_auth: true,
        is_facebook_auth: false
      }).subscribe(user => {
        this.login({email: data.email, password: data.idToken.substring(0, 30)});
      }, error => {
        if (error.error.detail === 'User with the same credentials already exists!') {
          this.login({email: data.email, password: data.idToken.substring(0, 30)});
        }
      });
    }).catch(error => {
      alert(error);
    });
  }

  signInWithFacebook() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
      this.httpClient.post(this.baseUrl + 'user/', {
        email: data.email,
        password: data.id,
        name: data.name,
        facebook_token: data.id,
        is_facebook_auth: true,
        is_google_auth: false
      }).subscribe(user => {
        this.login({email: data.email, password: data.id});
      }, error => {
        if (error.error.detail === 'User with the same credentials already exists!') {
          this.login({email: data.email, password: data.id});
        }
      });
    }).catch(error => {
      alert(error);
    });
  }

  resetPasswordRequest(emailAddress: string) {
    return this.httpClient.post(this.baseUrl + 'reset/password/request/',
      {email: emailAddress});
  }

  resetPasswordConfirm(resetToken: string) {
    return this.httpClient.post(this.baseUrl + 'reset/password/confirm/',
      {reset_token: resetToken});
  }

  resetPassword(resetToken: string, newPassword: string) {
    return this.httpClient.post(this.baseUrl + 'reset/password/',
      {reset_token: resetToken, password: newPassword});
  }
}

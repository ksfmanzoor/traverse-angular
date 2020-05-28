import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';
import {AuthService, GoogleLoginProvider} from 'angularx-social-login';
import {Router} from '@angular/router';

export interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/';
  token = '';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  signUp(signUpData) {
    return this.httpClient.post(this.baseUrl + 'user/', signUpData);
  }

  login(loginData) {
    return this.httpClient.post(this.baseUrl + 'token/', loginData).pipe(map((tokenObject: Token) => {
      this.token = tokenObject.token;
    }), mergeMap(data => this.httpClient.get(this.baseUrl + 'user/'))).subscribe(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.router.navigate(['/']).then();
      return user;
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      this.httpClient.post(this.baseUrl + 'user/', {
        email: data.email,
        password: data.idToken.substring(0, 30),
        name: data.name,
        google_token: data.idToken,
        is_google_auth: true
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

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angularx-social-login';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Token} from 'src/app/models/token';
import {PopupBookingService} from 'src/app/services/popup-booking.service';
import {environment} from 'src/environments/environment';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = environment.baseUrl;
  private tokenSubject: BehaviorSubject<any>;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  public verifiedUser;

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router,
              private popupBookingService: PopupBookingService) {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.tokenSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')));
    this.verifiedUser = !!this.currentUserValue ? this.currentUserValue.is_verified : false;
  }

  signUp(signUpData): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'user/', signUpData);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get tokenValue(): Token {
    return this.tokenSubject.value;
  }

  login(loginData): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'token/', loginData).pipe(map((tokenObject: Token) => {
      localStorage.setItem('token', JSON.stringify(tokenObject));
      this.tokenSubject.next(tokenObject);
    })).pipe(map(() => {
      this.httpClient.get(this.baseUrl + 'user/').subscribe((user: User) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.verifiedUser = user.is_verified;
        if (this.popupBookingService.isPopUpMode) {
          this.popupBookingService.createBookingThroughPopup();
        } else {
          this.router.navigate(['/']).then();
        }
      });
    }));
  }

  logout() {
    this.router.navigate(['/']).then(() => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      this.currentUserSubject.next(null);
      this.tokenSubject.next(null);
    });
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

  updateUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
}

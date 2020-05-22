import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';

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

    constructor(private httpClient: HttpClient) {
        this.currentUserSubject = new BehaviorSubject(null);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    signUpThroughEmail(emailAddress: string, passwordKey: string) {
        return this.httpClient.post(this.baseUrl + 'user/', {email: emailAddress, password: passwordKey});
    }

    signUpThroughPhone(phoneNumber: string, passwordKey: string) {
        return this.httpClient.post(this.baseUrl + 'user/', {phone_number: phoneNumber, password: passwordKey});
    }

    login(emailAddress: string, passwordKey: string) {
        return this.httpClient.post(this.baseUrl + 'token/', {email: emailAddress, password: passwordKey}).pipe(map((tokenObject: Token) => {
            this.token = tokenObject.token;
        }), mergeMap(data => this.httpClient.get(this.baseUrl + 'user/'))).subscribe(user => {
            this.currentUserSubject.next(user);
            return user;
        });
    }

    logout() {
        this.currentUserSubject.next(null);
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

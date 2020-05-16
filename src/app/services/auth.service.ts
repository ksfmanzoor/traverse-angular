import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/';

  constructor(private httpClient: HttpClient) { }

  signUpThroughEmail(emailAddress: string, passwordKey: string) {
    console.log({email: emailAddress, password: passwordKey});
    return this.httpClient.post(this.baseUrl + 'user/', {email: emailAddress, password: passwordKey});
  }

  signUpThroughPhone(phoneNumber) {
    return this.httpClient.post(this.baseUrl + 'user/' , {phone_number: phoneNumber}) ;
  }
}

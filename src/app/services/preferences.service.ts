import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private emailSendUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/verify/user/send/';
  private passwordUpdateUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/change/password/';
  constructor(private httpClient: HttpClient) { }

  emailRequest() {
    return this.httpClient.post(this.emailSendUrl, {});
  }

  updatePasswordRequest(updatePasswordData) {
    return this.httpClient.post(this.passwordUpdateUrl, updatePasswordData);
  }
}

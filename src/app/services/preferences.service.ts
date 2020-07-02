import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private updateProfileUrl = `${environment.baseUrl}user/`;
  private emailSendUrl = `${environment.baseUrl}verify/user/send/`;
  private passwordUpdateUrl = `${environment.baseUrl}change/password/`;
  constructor(private httpClient: HttpClient) { }

  updateAvatar(id, imageData) {
    return this.httpClient.patch(`${this.updateProfileUrl}${id}/`, imageData);
  }

  updateName(id, newName) {
    return this.httpClient.patch(`${this.updateProfileUrl}${id}/`, {name: newName});
  }

  emailRequest() {
    return this.httpClient.post(this.emailSendUrl, {});
  }

  updatePasswordRequest(updatePasswordData) {
    return this.httpClient.post(this.passwordUpdateUrl, updatePasswordData);
  }
}

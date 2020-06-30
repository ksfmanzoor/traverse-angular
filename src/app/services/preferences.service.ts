import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private updateNameUrl = `${environment.baseUrl}user/`;
  private emailSendUrl = `${environment.baseUrl}verify/user/send/`;
  private passwordUpdateUrl = `${environment.baseUrl}change/password/`;
  constructor(private httpClient: HttpClient) { }

  updateName(id, newName) {
    return this.httpClient.patch(this.updateNameUrl + `${id}/`, {name: newName});
  }

  emailRequest() {
    return this.httpClient.post(this.emailSendUrl, {});
  }

  updatePasswordRequest(updatePasswordData) {
    return this.httpClient.post(this.passwordUpdateUrl, updatePasswordData);
  }
}

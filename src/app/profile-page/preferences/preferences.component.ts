import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  editIcon = faPencilAlt;
  verifiedIcon = faCheck;
  isVerified: boolean;
  isEmail: boolean;
  emailAddress: string;
  phoneNumber: string;
  name: string;
  isDisabled = false;
  timeLeft = 60;
  changePasswordForm: FormGroup;

  private emailSendUrl = 'http://traverse.ap-south-1.elasticbeanstalk.com/api/verify/user/send/';


  constructor(private authenticationService: AuthenticationService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
    });
    this.authenticationService.currentUser.subscribe(user => {
      this.name = user.name;
      this.emailAddress = user.email;
      this.phoneNumber = user.phone_number;
      this.isVerified = user.is_verified;
      if (user.phone_number === '') {
        this.isEmail = true;
      }
    });
  }

  sendEmail() {
    this.isDisabled = true;
    this.startTimer();
    this.httpClient.post(this.emailSendUrl, {}).subscribe(data => {
      alert('Check you email for verification');
    }, error => {
      alert(error);
    });
  }

  sendOTP() {
    this.isDisabled = true;
    this.startTimer();
  }

  get formControl() {
    return this.changePasswordForm.controls;
  }

  updatePassword() {
    this.httpClient.post('http://traverse.ap-south-1.elasticbeanstalk.com/api/change/password/', {
      current_password: this.formControl.currentPassword.value,
      new_password: this.formControl.newPassword.value,
    }).subscribe(data => {
      alert(data);
      this.formControl.currentPassword.setValue(null);
      this.formControl.newPassword.setValue(null);
    }, error => {
      alert(error.error);
    });
  }

  startTimer() {
    setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.isDisabled = false;
      }
    }, 1000);
  }
}

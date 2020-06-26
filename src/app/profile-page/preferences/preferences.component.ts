import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {Subscription} from 'rxjs';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {PreferencesService} from 'src/app/services/preferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit, OnDestroy {
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
  subscription: Subscription;

  constructor(private authenticationService: AuthenticationService, private preferencesService: PreferencesService) {
  }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
    this.subscription = this.authenticationService.currentUser.subscribe(user => {
      this.name = user.name;
      this.emailAddress = user.email;
      this.phoneNumber = user.phone_number;
      this.isVerified = user.is_verified;
      if (user.phone_number === '') {
        this.isEmail = true;
      }
    });
  }

  get formControl() {
    return this.changePasswordForm.controls;
  }

  sendEmail() {
    this.isDisabled = true;
    this.startTimer();
    this.preferencesService.emailRequest().subscribe(data => {
      alert('Check you email for verification');
    }, error => {
      alert(error);
    });
  }

  sendOTP() {
    this.isDisabled = true;
    this.startTimer();
  }

  updatePassword() {
    this.preferencesService.updatePasswordRequest({
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

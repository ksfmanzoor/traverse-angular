import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  loginData = {};
  isPhone = false;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      phoneNumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.isPhone) {
      this.loginData = {
        phone_number: this.formControl.phoneNumber.value,
        password: this.formControl.password.value
      };
    } else {
      this.loginData = {email: this.formControl.email.value, password: this.formControl.password.value};

    }
    this.authenticationService.login(this.loginData).subscribe();
  }

  onEmailClick() {
    this.isPhone = false;
  }

  onPhoneClick() {
    this.isPhone = true;
  }

}

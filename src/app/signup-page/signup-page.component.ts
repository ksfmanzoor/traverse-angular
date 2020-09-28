import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  requiredInfo = {
    heading: 'Sign Up',
    subtitle: 'Create a new account',
    altText: 'Already',
    route: '/authentication/login',
    keyWord: 'Sign In'
  };
  signUpForm: FormGroup;
  signUpData = {};
  loginData = {};
  isPhone = false;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      phoneNumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  get formControl() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    if (this.isPhone) {
      this.signUpData = {
        phone_number: this.formControl.phoneNumber.value,
        password: this.formControl.password.value,
        is_google_auth: false,
        is_facebook_auth: false
      };
    } else {
      this.signUpData = {
        email: this.formControl.email.value,
        password: this.formControl.password.value,
        is_google_auth: false,
        is_facebook_auth: false
      };
    }
    this.authenticationService.signUp(this.signUpData).subscribe(user => {
      this.loginData = {email: this.formControl.email.value, password: this.formControl.password.value};
      this.authenticationService.login(this.loginData);
    }, error => {
      alert(error.error.detail);
    });
  }

  onEmailClick() {
    this.isPhone = false;
  }

  onPhoneClick() {
    this.isPhone = true;
  }

}

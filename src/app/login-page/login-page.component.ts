import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  requiredInfo = {
    heading: 'Sign In',
    subtitle: 'Log in to your account',
    altText: 'Don\'t',
    route: '/authentication/signup',
    keyWord: 'Sign Up'
  };

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

}

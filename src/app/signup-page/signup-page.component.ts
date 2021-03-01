import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }


}

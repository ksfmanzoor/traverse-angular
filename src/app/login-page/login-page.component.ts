import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    requiredInfo = {heading: 'Sign In', subtitle: 'Log in to your account', altText: 'Don\'t', route: '/signup', keyWord: 'Sign Up'};

    constructor() {
    }

    ngOnInit(): void {
    }

}

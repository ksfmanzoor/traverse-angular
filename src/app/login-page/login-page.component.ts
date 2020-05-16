import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    requiredInfo = {heading: 'Sign In', subtitle: 'Log in to your account', altText: 'Don\'t', route: '/signup', keyWord: 'Sign Up'};
    loginForm: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    get formControl() { return this.loginForm.controls; }

    onSubmit() {
        console.log(this.loginForm.value);
    }
}

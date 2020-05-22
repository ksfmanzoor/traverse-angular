import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    requiredInfo = {heading: 'Sign In', subtitle: 'Log in to your account', altText: 'Don\'t', route: '/signup', keyWord: 'Sign Up'};
    loginForm: FormGroup;
    isPhone = false;

    constructor(private authService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            phoneNumber: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    get formControl() { return this.loginForm.controls; }

    onSubmit() {
        console.log(this.loginForm.value);
        this.authService.login(this.formControl.email.value, this.formControl.password.value);
    }

    onEmailClick() {
        this.isPhone = false;
    }

    onPhoneClick() {
        this.isPhone = true;
    }
}

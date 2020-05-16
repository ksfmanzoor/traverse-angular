import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
    requiredInfo = {heading: 'Sign UP', subtitle: 'Create a new account', altText: 'Already', route: '/login', keyWord: 'Sign In'};
    signUpForm: FormGroup;
    isPhone = false;

    constructor(private authService: AuthService) {
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
            this.authService.signUpThroughPhone(this.formControl.phoneNumber.value, this.formControl.password.value).subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
        } else {
            this.authService.signUpThroughEmail(this.formControl.email.value, this.formControl.password.value).subscribe(data => {
                console.log(data);
            }, error => {
                console.log(error);
            });
        }
    }

    onEmailClick() {
        this.isPhone = false;
    }

    onPhoneClick() {
        this.isPhone = true;
    }

}

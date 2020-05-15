import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
    requiredInfo = {heading: 'Sign UP', subtitle: 'Create a new account', altText: 'Already', route: '/login', keyWord: 'Sign In'};
    signUpForm: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.signUpForm = new FormGroup({
            username: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }

    get formControl() { return this.signUpForm.controls; }

    onSubmit() {
        console.log(this.signUpForm.value);
    }

}

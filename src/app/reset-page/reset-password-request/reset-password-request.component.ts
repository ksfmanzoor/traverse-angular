import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-reset-password-request',
  templateUrl: './reset-password-request.component.html',
  styleUrls: ['./reset-password-request.component.css']
})
export class ResetPasswordRequestComponent implements OnInit {

  resetEmail = ''; // Input field bind value
  hasError = false; // Boolean that decides whether to show error or not
  error: string; // Error string

  hasSubmitted = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  requestPasswordToken() {
    // #TODO: Validate the email
    // Assuming email is valid
    this.authService.resetPasswordRequest(this.resetEmail).subscribe(res => {
        this.hasSubmitted = true;
      },
      error => {
        this.hasError = true;
        this.error = 'Something bad happened! Please try again.';
        if (error.error instanceof ErrorEvent) {
          console.log('An error occurred:', error.error.message);
        } else {
          this.hasError = true;
          if (error.error.detail === 'User not found!') {
            this.error = 'No user with that email exists!';
          }
          console.log(error);
        }
      });
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-reset-password-confirm',
  templateUrl: './reset-password-confirm.component.html',
  styleUrls: ['./reset-password-confirm.component.css']
})
export class ResetPasswordConfirmComponent implements OnInit {
  @Input() resetToken: string;

  isTokenGood = false;
  newPassword = '';
  hasReset = false;
  msg = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.resetPasswordConfirm(this.resetToken).subscribe(
      res => {
        this.isTokenGood = true;
      }
    );
  }

  resetPassword() {
    this.authService.resetPassword(this.resetToken, this.newPassword).subscribe(
      res => {
        this.hasReset = true;
        this.msg = 'Password changes successfully! Please login with the new password.';
      },
      error => {
        this.hasReset = true;
        this.msg = 'Something went wrong! Please try again.';
      }
    );
  }
}

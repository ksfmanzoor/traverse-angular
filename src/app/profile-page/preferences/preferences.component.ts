import {Component, OnInit} from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  editIcon = faPencilAlt;
  verifiedIcon = faCheck;
  isVerified: boolean;
  isEmail: boolean;
  emailAddress: string;
  phoneNumber: string;
  name: string;
  isDisabled = false;

  timeLeft = 60;

  startTimer() {
    setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.isDisabled = false;
      }
    }, 1000);
  }

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(user => {
      this.name = user.name;
      this.emailAddress = user.email;
      this.phoneNumber = user.phone_number;
      this.isVerified = user.is_verified;
      if (user.phone_number === '') {
        this.isEmail = true;
      }
    });
  }

  sendEmail() {
    this.isDisabled = true;
    this.startTimer();
  }

  sendOTP() {
    this.isDisabled = true;
    this.startTimer();
  }

}

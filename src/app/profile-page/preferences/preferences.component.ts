import {Component, OnInit} from '@angular/core';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
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

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(user => {
      this.emailAddress = user.email;
      this.phoneNumber = user.phone_number;
      this.isVerified = user.is_verified;
      if (user.phone_number === '') {
        this.isEmail = false;
      }
    });
  }

}

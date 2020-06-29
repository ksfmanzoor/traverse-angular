import {Component, OnInit} from '@angular/core';
import {faFacebookSquare, faGooglePlusSquare} from '@fortawesome/free-brands-svg-icons';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-social-auth',
  templateUrl: './social-auth.component.html',
  styleUrls: ['./social-auth.component.css']
})
export class SocialAuthComponent implements OnInit {
  facebook = faFacebookSquare;
  google = faGooglePlusSquare;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  facebookSignIn() {
    this.authenticationService.signInWithFacebook();
  }

  googleSignIn() {
    this.authenticationService.signInWithGoogle();
  }

}

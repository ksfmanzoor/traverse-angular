import {Component, OnInit} from '@angular/core';
import {faFacebookSquare, faGooglePlusSquare} from '@fortawesome/free-brands-svg-icons';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-social-login',
    templateUrl: './social-login.component.html',
    styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {
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

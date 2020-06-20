import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  facebookIcon = faFacebook;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}

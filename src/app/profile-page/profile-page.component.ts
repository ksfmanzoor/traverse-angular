import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {faNewspaper} from '@fortawesome/free-regular-svg-icons';
import {faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  blogIcon = faNewspaper;
  preferencesIcon = faCog;
  logoutIcon = faSignOutAlt;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}

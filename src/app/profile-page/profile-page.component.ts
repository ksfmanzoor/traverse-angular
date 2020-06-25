import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {faNewspaper} from '@fortawesome/free-regular-svg-icons';
import {faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {NavBarService} from '../services/nav-bar.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  blogIcon = faNewspaper;
  preferencesIcon = faCog;
  logoutIcon = faSignOutAlt;

  constructor(private authenticationService: AuthenticationService, private navBarService: NavBarService) { }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnDestroy() {
    this.navBarService.changeNavColor.next('transparent');
  }
}

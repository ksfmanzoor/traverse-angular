import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NavBarService} from '../services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = 'My Account';
  isShown: boolean;
  dropdownItems = [{routerLink: '/login', label: 'Login'}, {routerLink: '/signup', label: 'Sign Up'}];

  constructor(private authenticationService: AuthenticationService, private navBarService: NavBarService) {
  }

  ngOnInit(): void {
    this.navBarService.navBarValue.subscribe(value => {
      this.isShown = value;
    });
    this.authenticationService.currentUser.subscribe(data => {
      if (data) {
        this.title = data.name;
        this.dropdownItems = [{routerLink: '/', label: 'Profile'}, {routerLink: '/', label: 'Logout'}];
      } else {
        this.title = 'My Account';
        this.dropdownItems = [{routerLink: '/login', label: 'Login'}, {routerLink: '/signup', label: 'Sign Up'}];
      }
    });
  }

  logout() {
    this.authenticationService.logout();
  }

}

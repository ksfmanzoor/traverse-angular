import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NavBarService} from '../services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name = '';
  isLoggedIn = false;
  isShown: boolean;

  constructor(private authenticationService: AuthenticationService, public navBarService: NavBarService) {
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(data => {
      if (data) {
        this.isLoggedIn = true;
        this.name = data.name;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

}

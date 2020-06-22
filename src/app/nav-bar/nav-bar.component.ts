import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NavBarService} from '../services/nav-bar.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  name = '';
  isLoggedIn = false;
  color = '';

  constructor(private authenticationService: AuthenticationService, private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.navBarService.changeNavColor.subscribe((value => this.color = value));
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

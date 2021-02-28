import {Component, HostListener, OnInit} from '@angular/core';
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
  color = '';
  isVisible = true;
  width: number;

  constructor(private authenticationService: AuthenticationService, private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.width = window.innerWidth;
    this.navBarService.changeNavColor.subscribe((value => this.color = value));
    this.navBarService.changeVisibility.subscribe((value => this.isVisible = value));
    this.authenticationService.currentUser.subscribe(data => {
      if (data) {
        this.isLoggedIn = true;
        this.name = data.name;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  @HostListener('window: resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
  }

}

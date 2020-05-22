import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = 'My Account';
  dropdownItems = [{routerLink: '/login', label: 'Login'}, {routerLink: '/signup', label: 'Sign Up'}];
  constructor() { }

  ngOnInit(): void {
  }

}

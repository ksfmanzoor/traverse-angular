import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    title = 'My Account';
    dropdownItems = [{routerLink: '/login', label: 'Login'}, {routerLink: '/signup', label: 'Sign Up'}];

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
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

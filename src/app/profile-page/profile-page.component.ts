import {Component, OnDestroy, OnInit} from '@angular/core';
import {faNewspaper} from '@fortawesome/free-regular-svg-icons';
import {faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';
import {User} from 'src/app/models/user';
import {PreferencesService} from 'src/app/services/preferences.service';
import {AuthenticationService} from '../services/authentication.service';
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
  user: User;
  userSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService, private navBarService: NavBarService, private preferencesService: PreferencesService) { }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
    this.userSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  onSelectFile(event) {
    const formData = new FormData();
    formData.append('profile_image', event.target.files[0]);
    this.preferencesService.updateAvatar(this.user.id, formData).subscribe((data: User) => {
      this.authenticationService.updateUser(data);
    }, error => {
      alert(error.error.detail);
    });
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnDestroy() {
    this.navBarService.changeNavColor.next('transparent');
    this.userSubscription.unsubscribe();
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {NavBarService} from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit, OnDestroy {
  verificationID = '';
  isVerified: boolean;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient,
              private navBarService: NavBarService, private router: Router, private authenticationService: AuthenticationService) { }


  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
    this.route.params.subscribe(data => {
      this.verificationID = data.verificationID;
    });
    this.httpClient.post('http://traverse.ap-south-1.elasticbeanstalk.com/api/verify/user/',
      {verification_token: this.verificationID}).subscribe(data => {
      this.isVerified = true;
      this.authenticationService.updateUserVerification();
    }, error => {
      if (error.status === 400) {
        this.errorMessage = error.error;
      } else {
        alert(error.error);
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/']).then();
  }

  ngOnDestroy() {
    this.navBarService.changeNavColor.next('transparent');
  }
}


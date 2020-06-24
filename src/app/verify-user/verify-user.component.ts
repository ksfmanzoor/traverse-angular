import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {
  verificationID = '';
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.verificationID = data.verificationID;
    });
    this.httpClient.post('http://traverse.ap-south-1.elasticbeanstalk.com/api/verify/user/', {verification_token: this.verificationID}).subscribe(data => {
      console.log(data);
    }, error => {
      alert(error.error.detail);
    });
  }

}

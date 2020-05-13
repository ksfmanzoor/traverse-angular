import { Component, OnInit } from '@angular/core';
import {faFacebookSquare, faGooglePlusSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  headerInfo = { title: '', subtitle: '', imageUrl: 'assets/header.jpg'};
  facebook = faFacebookSquare;
  google = faGooglePlusSquare;

  constructor() { }

  ngOnInit(): void {
  }

}

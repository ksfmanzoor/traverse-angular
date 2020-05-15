import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-skeleton',
  templateUrl: './login-skeleton.component.html',
  styleUrls: ['./login-skeleton.component.css']
})
export class LoginSkeletonComponent implements OnInit {
  @Input() requiredInfo: {heading: string, subtitle: string , altText: string, route: string, keyWord: string};

  constructor() { }

  ngOnInit(): void {
  }

}

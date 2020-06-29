import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-skeleton',
  templateUrl: './auth-skeleton.component.html',
  styleUrls: ['./auth-skeleton.component.css']
})
export class AuthSkeletonComponent implements OnInit {
  @Input() requiredInfo: {heading: string, subtitle: string , altText: string, route: string, keyWord: string};

  constructor() { }

  ngOnInit(): void {
  }

}

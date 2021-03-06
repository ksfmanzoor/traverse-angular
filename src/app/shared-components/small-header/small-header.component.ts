import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-header',
  templateUrl: './small-header.component.html',
  styleUrls: ['./small-header.component.css']
})
export class SmallHeaderComponent implements OnInit {
  @Input() headerInfo: {title: string, coverImage: string};
  constructor() { }

  ngOnInit(): void {
  }

}

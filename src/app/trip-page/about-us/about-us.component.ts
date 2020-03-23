import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  @Input() aboutUS: {description: string, imageUrl: string};
  constructor() { }

  ngOnInit(): void {}

}

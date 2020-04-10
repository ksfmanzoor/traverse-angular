import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {
  @Input() headerInfo: { title: string, subtitle: string, imageUrl: string };
  constructor() { }

  ngOnInit(): void {
    console.log(this.headerInfo);
  }

}

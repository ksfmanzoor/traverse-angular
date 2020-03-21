import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogText = '<p>Hello</p><h>Blog page</h>';
  constructor() { }

  ngOnInit(): void {
  }

}

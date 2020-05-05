import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-blog-page',
  templateUrl: './all-blog-page.component.html',
  styleUrls: ['./all-blog-page.component.css']
})
export class AllBlogPageComponent implements OnInit {
  headerInfo = {title: 'Lorem Ipsum Sit', backgroundImage: 'assets/header.jpg'};
  blogTitle = {title: 'Our Blogs', subtitle: 'Lorem Ipsum Gypsum Sit'};
  constructor() { }

  ngOnInit(): void {
  }

}

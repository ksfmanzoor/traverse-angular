import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {Convert} from '../models/blog';
import Instance = WebAssembly.Instance;
import {BlogService} from '../services/blog.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  blogs;
  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    // this.blogService.fetchBlogs().subscribe()
    this.blogService.fetchBlogs().subscribe((data) => {
      (this.router.events.subscribe((event: NavigationStart ) => {
        if (event.restoredState) {
          console.log('id');
        }
      }));
      this.blogs = Convert.toBlog(JSON.stringify(data));
    });
  }
}

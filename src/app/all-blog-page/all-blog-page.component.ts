import {Component, OnInit} from '@angular/core';
import {MinifiedHomeData} from '../models/minified-home-data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-blog-page',
  templateUrl: './all-blog-page.component.html',
  styleUrls: ['./all-blog-page.component.css']
})
export class AllBlogPageComponent implements OnInit {
  headerInfo: {title: string, coverImage: string};
  blogTitle = {title: 'Our Blogs', subtitle: 'Read all Travel Stories'};
  allBlogsList: MinifiedHomeData[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const result = data.blogs;
      this.headerInfo = {title: result[0].tag_line, coverImage: result[0].cover_image};
      this.allBlogsList = result[1];
    });
  }

}

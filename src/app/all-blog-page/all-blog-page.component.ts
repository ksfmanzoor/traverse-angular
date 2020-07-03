import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {MinifiedHomeData} from '../models/minified-home-data';

@Component({
  selector: 'app-all-blog-page',
  templateUrl: './all-blog-page.component.html',
  styleUrls: ['./all-blog-page.component.css']
})
export class AllBlogPageComponent implements OnInit {
  headerInfo: {title: string, coverImage: string};
  blogTitle = {title: 'Our Blogs', subtitle: 'Read all Travel Stories'};
  adminTitle = {title: 'All Blogs', subtitle: 'Blogs for the admin'};
  allBlogsList: MinifiedHomeData[];
  adminBlogsList: MinifiedHomeData[];
  isAdmin = false;
  constructor(private route: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.isAdmin = this.authenticationService.currentUserValue.is_superuser;
    this.route.data.subscribe(data => {
      const result = data.blogs;
      this.headerInfo = {title: result[0].tag_line, coverImage: result[0].cover_image};
      this.allBlogsList = result[1];
      if (this.isAdmin) {
        this.adminBlogsList = result[2];
      }
    });
  }
}

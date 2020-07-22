import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {Comment} from 'src/app/models/comment';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPageComponent implements OnInit {
  headerInfo: { title, subtitle: string, imageUrl: string };
  blogText = '';
  comments: Comment[];
  blogId = '';

  facebookIcon = faFacebook;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const result = data.blog;
      const blogData = result[0];
      this.headerInfo = {title: blogData.title, subtitle: blogData.subtitle, imageUrl: blogData.thumbnail};
      this.blogText = blogData.content;
      this.comments = result[1];
      this.blogId = this.route.snapshot.params.id;
    });
  }

}

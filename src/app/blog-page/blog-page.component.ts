import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Blog} from '../models/blog';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPageComponent implements OnInit {
  headerInfo: { title, subtitle: string, imageUrl: string };
  blogText = '';
  constructor(private dom: DomSanitizer, private route: ActivatedRoute) {
    this.dom.bypassSecurityTrustHtml(this.blogText);
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const result = data.blog;
      this.headerInfo = {title: result.title, subtitle: result.subtitle, imageUrl: result.thumbnail};
      this.blogText = result.content;
    });
  }

}

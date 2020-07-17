import {Component, OnInit, ViewEncapsulation} from '@angular/core';
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
  toReply = [];
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const result = data.blog;
      this.headerInfo = {title: result.title, subtitle: result.subtitle, imageUrl: result.thumbnail};
      this.blogText = result.content;
    });
    for (let i = 0; i < 5; i++) {
      this.toReply.push(false);
    }
  }

  reply(index) {
    this.toReply[index] = !this.toReply[index];
  }
}

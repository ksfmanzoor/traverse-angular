import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MinifiedHomeData} from '../../models/minified-home-data';

@Component({
  selector: 'app-blog-carousel',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.css']
})
export class HomeBlogsComponent implements OnInit {
  @Input() minifiedBlogs: MinifiedHomeData[];
  isMobile: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window: resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth < 768;
  }

  navigate(slug) {
    this.router.navigate(['/blog', slug]).then();
  }

}

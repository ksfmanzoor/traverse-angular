import {Component, HostListener, Input, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {MinifiedHomeData} from '../../models/minified-home-data';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-carousel',
  templateUrl: './blog-carousel.component.html',
  styleUrls: ['./blog-carousel.component.css']
})
export class BlogCarouselComponent implements OnInit {
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

  navigate(id) {
    this.router.navigate(['/blog', id]).then();
  }

}

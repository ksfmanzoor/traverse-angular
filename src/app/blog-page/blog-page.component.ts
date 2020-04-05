import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Blog} from '../models/blog';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogPageComponent implements OnInit {
  blog: Blog;
  blogText = '<h1>Each day through Hunza is like living through a painting with pastel colours. Hunza bursts with colors during spring, whether the pink and white blossoms or the green, gold, yellow acting as accents, against the bright blue sky, almost magnifying the beauty of the mountains.&nbsp;</h1>\n' +
      '\n' +
      '<h1><img alt="" src="https://traverse-bucket.s3.amazonaws.com/19238218_863464060478506_2145975569244836147_o.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS6Q5RMEHJCXVWXBE%2F20200401%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20200401T180645Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=495e6f1515853eb5bca1a874b83f08b638d3d0bf6e0428b5c19b3c9931721d33" style="height:1344px; width:2013px" />Each day through Hunza is like living through a painting with pastel colours. Hunza bursts with colors during spring, whether the pink and white blossoms or the green, gold, yellow acting as accents, against the bright blue sky, almost magnifying the beauty of the mountains.&nbsp;</h1>\n' +
      '\n' +
      '<h1><img alt="" src="https://traverse-bucket.s3.amazonaws.com/opt/python/current/app/static/media/2020/04/01/57232139_1322833207874920_4793013833947938816_o.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAS6Q5RMEHJCXVWXBE%2F20200401%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200401T170552Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=db2b5d62c831d5314bd7da139f71cdc8edfce5340911fc67e20980602068d045" style="height:1344px; width:2013px" />Each day through Hunza is like living through a painting with pastel colours. Hunza bursts with colors during spring, whether the pink and white blossoms or the green, gold, yellow acting as accents, against the bright blue sky, almost magnifying the beauty of the mountains.&nbsp;</h1>\n' +
      '\n' +
      '<p>&nbsp;</p>\n' +
      '\n' +
      '<p>&nbsp;</p>\n' +
      '\n' +
      '<h1>Each day through Hunza is like living through a painting with pastel colours. Hunza bursts with colors during spring, whether the pink and white blossoms or the green, gold, yellow acting as accents, against the bright blue sky, almost magnifying the beauty of the mountains.&nbsp;</h1>\n' +
      '\n' +
      '<h1><img alt="" src="https://traverse-bucket.s3.amazonaws.com/opt/python/current/app/static/media/2020/04/01/57232139_1322833207874920_4793013833947938816_o.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAS6Q5RMEHJCXVWXBE%2F20200401%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200401T170552Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=db2b5d62c831d5314bd7da139f71cdc8edfce5340911fc67e20980602068d045" style="height:1344px; width:2013px" />​​​​​​​Each day through Hunza is like living through a painting with pastel colours. Hunza bursts with colors during spring, whether the pink and white blossoms or the green, gold, yellow acting as accents, against the bright blue sky, almost magnifying the beauty of the mountains.&nbsp;</h1>\n' +
      '\n' +
      '<h1><img alt="" src="https://traverse-bucket.s3.amazonaws.com/opt/python/current/app/static/media/2020/04/01/57232139_1322833207874920_4793013833947938816_o.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAS6Q5RMEHJCXVWXBE%2F20200401%2Fap-south-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200401T170552Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=db2b5d62c831d5314bd7da139f71cdc8edfce5340911fc67e20980602068d045" style="height:1344px; width:2013px" />Each day through Hunza is like living through a painting with pastel colours. Hunza bursts with colors during spring, whether the pink and white blossoms or the green, gold, yellow acting as accents, against the bright blue sky, almost magnifying the beauty of the mountains.&nbsp;</h1>';
  constructor(private dom: DomSanitizer) {
    this.dom.bypassSecurityTrustHtml(this.blogText);
  }

  ngOnInit(): void {
  }

}

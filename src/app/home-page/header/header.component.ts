import {Component, Input, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchIcon = faSearch;
  @Input()  headerData: {tagLine: string, coverImage: string};
  constructor() { }

  ngOnInit(): void {
  }

}

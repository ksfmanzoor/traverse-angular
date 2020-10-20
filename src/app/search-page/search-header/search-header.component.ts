import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.css']
})
export class SearchHeaderComponent implements OnInit {
  @Input() searchText = '';
  searchIcon = faSearch;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['/search', this.searchText]).then();
  }
}

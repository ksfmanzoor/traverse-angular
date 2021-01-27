import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchIcon = faSearch;
  searchQuery = '';
  @Input() filterColor = 'white';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    if (this.searchQuery !== '') {
      this.router.navigate(['search', this.searchQuery]).then();
    } else {
      alert('Search field is empty');
    }
  }
}

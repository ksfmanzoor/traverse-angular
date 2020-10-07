import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchIcon = faSearch;
  searchQuery = '';
  @Input() headerData: { tagLine: string, coverImage: string };

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

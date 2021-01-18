import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-trips-page',
  templateUrl: './all-trips-page.component.html',
  styleUrls: ['./all-trips-page.component.css']
})
export class AllTripsPageComponent implements OnInit {
  headerInfo = { title: 'Traverse Pakistan Trips', coverImage: 'assets/header.jpg' };
  constructor() { }

  ngOnInit(): void {
  }

}

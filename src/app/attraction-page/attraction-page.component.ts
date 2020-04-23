import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attraction-page',
  templateUrl: './attraction-page.component.html',
  styleUrls: ['./attraction-page.component.css']
})
export class AttractionPageComponent implements OnInit {
  headerInfo = {title: 'Lorem Ipsum', subtitle: 'Lorem Ipsum Gyspum', imageUrl: 'assets/header.jpg'};
  constructor() { }

  ngOnInit(): void {
  }

}

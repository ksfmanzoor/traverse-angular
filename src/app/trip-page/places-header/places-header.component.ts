import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-places-header',
  templateUrl: './places-header.component.html',
  styleUrls: ['./places-header.component.css']
})
export class PlacesHeaderComponent implements OnInit {
  @Input() headerInfo: {title: string, subtitle: string, imageUrl: string};

  constructor() { }

  ngOnInit(): void {
  }

}

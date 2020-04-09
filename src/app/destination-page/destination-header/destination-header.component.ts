import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-destination-header',
  templateUrl: './destination-header.component.html',
  styleUrls: ['./destination-header.component.css']
})
export class DestinationHeaderComponent implements OnInit {
  @Input() headerInfo: { title: string, subtitle: string, imageUrl: string };

  constructor() { }

  ngOnInit(): void {
  }

}

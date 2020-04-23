import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})
export class DefaultHeaderComponent implements OnInit {
  @Input() headerInfo: { title: string, subtitle: string, imageUrl: string };

  constructor() { }

  ngOnInit(): void {
  }

}

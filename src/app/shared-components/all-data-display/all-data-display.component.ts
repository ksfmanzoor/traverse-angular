import {Component, Input, OnInit} from '@angular/core';
import {MinifiedHomeData} from '../../models/minified-home-data';

@Component({
  selector: 'app-all-data-display',
  templateUrl: './all-data-display.component.html',
  styleUrls: ['./all-data-display.component.css']
})
export class AllDataDisplayComponent implements OnInit {
  @Input() titleInfo: {title: string, subtitle: string};
  @Input() dataList: MinifiedHomeData[];
  @Input() path: string;
  totalRows: number;
  constructor() { }

  ngOnInit(): void {
    this.totalRows = Math.ceil(this.dataList.length / 3);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {MinifiedHomeData} from '../../models/minified-home-data';

@Component({
    selector: 'app-destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
    @Input() minifiedDestinationData: MinifiedHomeData[];


    constructor() {
    }

    ngOnInit(): void {
    }

}

import {Component, Input, OnInit} from '@angular/core';
import {MinifiedHomeData} from '../../models/minified-home-data';

@Component({
    selector: 'app-destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
    @Input() minifiedDestinationData: MinifiedHomeData[];
    classes = ['col-lg-5 col-xl-5', 'col-lg-7 col-xl-7', 'col-lg-4 col-xl-4', 'col-lg-4 col-xl-4', 'col-lg-4 col-xl-4'];

    constructor() {
    }

    ngOnInit(): void {
    }

}

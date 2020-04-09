import {Component, Input, OnInit} from '@angular/core';
import {HomepageDataService} from '../../services/homepage-data.service';
import {MinifiedDestination} from '../../models/minified-destination';

@Component({
    selector: 'app-destinations',
    templateUrl: './destinations.component.html',
    styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
    @Input() minifiedDestinationData: MinifiedDestination[];


    constructor() {
    }

    ngOnInit(): void {
        console.log(this.minifiedDestinationData[0]);
    }

}

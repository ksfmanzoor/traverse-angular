import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LoadingBarService} from '@ngx-loading-bar/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-destination-image',
    templateUrl: './destination-image.component.html',
    styleUrls: ['./destination-image.component.css']
})
export class DestinationImageComponent implements OnInit, OnDestroy {
    @Input() path;
    @Input() minifiedData: {
        id: string,
        title: string,
        subtitle: string,
        thumbnail: string
    };

    constructor(private loadingBar: LoadingBarService, private router: Router) {
    }

    ngOnInit(): void {
    }

    navigate() {
        this.loadingBar.start();
        this.router.navigate([this.path, this.minifiedData.id]).then();
    }

    ngOnDestroy(): void {
        this.loadingBar.stop();
    }

}

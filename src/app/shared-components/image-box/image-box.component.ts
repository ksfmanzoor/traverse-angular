import {Component, Input, OnInit} from '@angular/core';
import {LoadingBarService} from '@ngx-loading-bar/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-image-box',
    templateUrl: './image-box.component.html',
    styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit {
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
        this.router.navigate([this.path, this.minifiedData.id]).then();
    }
}


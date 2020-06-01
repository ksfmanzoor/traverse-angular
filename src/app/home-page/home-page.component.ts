import {Component, OnInit} from '@angular/core';
import {HomepageDataService} from '../services/homepage-data.service';
import {NavBarService} from '../services/nav-bar.service';



@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    loading = true;
    headerData: {tagLine: string, coverImage: string};
    destinationData: any;
    blogData: any;

    constructor(private homepageDataService: HomepageDataService, private navBarService: NavBarService) {
    }

    ngOnInit(): void {
        this.homepageDataService.getHomePageData().subscribe(data => {
            this.headerData = {tagLine: data[0].tag_line, coverImage: data[0].cover_image};
            this.destinationData = data[1];
            this.blogData = data[2];
            this.navBarService.navBarSubject.next(true);
            this.loading = false;
        });
    }
}

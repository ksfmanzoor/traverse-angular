import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {NavBarService} from '../services/nav-bar.service';

@Component({
  selector: 'app-reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.css']
})
export class ResetPageComponent implements OnInit, OnDestroy {

  isRequest = true;
  resetToken = '';

  constructor(private route: ActivatedRoute, private navBarService: NavBarService) {
  }

  ngOnInit(): void {
    this.navBarService.changeNavColor.next('#333333');
    this.route.params.subscribe(data => {
      if (isNotNullOrUndefined(data.resetToken)) {
        this.resetToken = data.resetToken;
        this.isRequest = false;
      }
    });
  }

  ngOnDestroy() {
    this.navBarService.changeNavColor.next('transparent');
  }

}

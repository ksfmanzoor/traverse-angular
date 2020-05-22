import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Component({
  selector: 'app-reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.css']
})
export class ResetPageComponent implements OnInit {

  isRequest = true;
  resetToken = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      if (isNotNullOrUndefined(data.resetToken)) {
        this.resetToken = data.resetToken;
        this.isRequest = false;
      }
    });
  }
}

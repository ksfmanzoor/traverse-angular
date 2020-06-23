import {Component, OnInit} from '@angular/core';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  editIcon = faPencilAlt;
  verifiedIcon = faCheck;
  isVerified = false;

  constructor() { }

  ngOnInit(): void {
  }

}
